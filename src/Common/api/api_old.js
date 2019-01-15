const host = "http://ov-sit.smartmidea.net";
const url = "ws://ovws-sit.smartmidea.net";
const appkeyForvivo = "c2db6cbc7609febb7c54f0df5234506c";
const appkeyForoppo = "b37142d426c90ddc1b28d1182f363384";
// const host = "https://ov-prod.smartmidea.net";
// const url = "wss://ovws-sit.smartmidea.net";
// const appkeyForvivo = "00498c1bb52ad5d4d81eca53dae47fd1";
// const appkeyForoppo = "ddb2668091508e243cc3b9570d094164";
import fetch from '@system.fetch';
import device from '@system.device';
import prompt from '@system.prompt';
const appidForvivo  = 2150;
const appidForoppo  = 2149;
import websocketfactory from '@system.websocketfactory';
import uuid from './uuid.js';
import SHA from 'js-sha256';

var Fly=require("flyio/dist/npm/hap")
var fly=new Fly(fetch)

const isvivo = false;  //配置vivo或者oppo环境

let appid  = '';
let appkey = '';
device.getInfo({
	success: function (ret) {
		if(ret.brand === 'vivo'){
			appid  = appidForvivo;
			appkey = appkeyForvivo;
		}else{
			appid  = appidForoppo;
			appkey = appkeyForoppo;
		}
	}
})
export default {
	onInit(){
	},
	//api接口
	hostData: {
		language: '',
		getUserToken     : '/v1/iotopen/user/token/get',
		getStatusQuery   : '/v1/iotopen/device/statusQuery',
		postDeviceControl: '/v1/iotopen/device/deviceControl',
		postDeviceBind:'/v1/iotopen/device/bind',
		postDeviceunBind:'/v1/iotopen/device/unbind',
		postDeviceStatusQuery:'/v1/iotopen/device/statusQuery',
		getDeviceList: "/v1/iotopen/device/deviceList",
		getConfigWorkHelp: "http://smartbbs.midea.com/msmart.php?mod=zhiyin&op=ovsearch",
	},
	//获取语言
	getlanguage(){
		let p = new Promise(function(resolve, reject){
			device.getInfo({
				success: function (ret) {
					if(ret.language){
						resolve(ret.language);
					}
				}
			})
		})
		return p;
	},
	//快连规则
	getUrlSSid(url){
		let mmid = "&mode=1";
		let mmid1 = '&mode=001';
		let qrCode = '';
		if(url.toLowerCase().indexOf(mmid) != -1 || url.toLowerCase().indexOf(mmid1) != -1){
			let len = 0;
			if(url.toLowerCase().indexOf(mmid) != -1){
				len = url.toLowerCase().indexOf(mmid);
			}else{
				len = url.toLowerCase().indexOf(mmid1);
			}
			qrCode = url.substring(0,len);
			if(qrCode.length === 22 || qrCode.length === 64 || qrCode.length === 65 || qrCode.length === 70 || qrCode.length === 69){
				return "midea_ac_" + qrCode.substring(qrCode.length - 4, qrCode.length);
			}else if (qrCode.length === 106 || qrCode.length === 109) {
				return qrCode.substring(qrCode.length - 13, qrCode.length);
			}else if (qrCode.length === 61){
				return ("midea_" + qrCode.substring(48,50) + "_xxxx").toLowerCase();
			}else{
				return '';
			}
		}
	},
	//获取url参数
	getUrlCan(url,key){
　　　　let arrObj = url.split("?");
　　　　if (arrObj.length > 1) {
　　　　　　let arrPara = arrObj[1].split("&");
　　　　　　let arr;
　　　　　　for (let i = 0; i < arrPara.length; i++) {
　　　　　　　　arr = arrPara[i].split("=");
　　　　　　　　if (arr != null && arr[0] == key) {
　　　　　　　　　　return arr[1];
　　　　　　　　}
　　　　　　}
　　　　　　return false;
　　　　}else {
　　　　　　return false;
　　　　}
	},
	//匹配设备品类
	getDeviceInformation(str){
		let that = this;
		let deviceSSID = "";
		let url_str = str.indexOf('kt_APP');
		let mideaUrl = str.indexOf('midea_');
		if(str.indexOf('kt_APP') > -1){
			deviceSSID = '0xAC';
			return deviceSSID;
		}else if(str.indexOf('midea_') > -1){
			deviceSSID = '0x' + str.substring(str.indexOf('midea_')+6,str.indexOf('midea_')+8);
			return deviceSSID;
		}else if(that.getUrlCan(str,'type')){
			deviceSSID = '0x' + that.getUrlCan(str,'type').substring(4,6);
			return deviceSSID;
		}else if(that.getUrlCan(str,'SSID')){
			deviceSSID = '0x' + that.getUrlCan(str,'SSID').substring(6,8);
			return deviceSSID;
		}else{
			return false;
		}
	},
	//生成UUID字符串
	createUUID(){
		let len = uuid.create().toString().length;
		let s   = uuid.create().toString();
		let str = s.substring(0,8) + s.substring(9,13) + s.substring(14,18) + s.substring(19,23) + s.substring(24,len)
		return str;
	},
	//获取时间戳
	getTimestamp(){
		// let timestamp = (new Date()).getTime();
		let timestamp = (new Date()).valueOf();
		let num = new Number(timestamp);
		return num.toString();
	},
	//获取消息签名
	getSignature(str1,str2,str3){
		let that = this;
		let str  = 'appid=' + appid + "&nonce=" + str2 + "&timestamp=" + str3;
		return SHA.sha256(str + str1 + appkey);
	},
	//获取设备绑定消息签名
	getSignatureDeviceBind(str1,str2,str3,str4){
		let that = this;
		let str  = "accesstoken=" + str2 + '&appid=' + appid +  "&nonce=" + str3 + "&timestamp=" + str4;
		return SHA.sha256(str + str1 + appkey);
	},
	//第三方平台用户获取访问令牌accessToken
	getUserToken(params){
		let that        = this;
		let objStr      = '';
		    params.type = 1;
		if((typeof params) === 'object'){
			objStr = JSON.stringify(params);
		}
		let strObj = {
			"appId"       : appid,
			"timestamp"   : that.getTimestamp(),
			"nonce"       : that.createUUID(),
			"Content-Type": 'application/json'
		}
		// prompt.showToast({message:"asdsd"+JSON.stringify(strObj)})
		    strObj.signature = that.getSignature(objStr,strObj.nonce,strObj.timestamp)
		var p                = new Promise(function(resolve, reject){
			if((typeof params) === 'object'){
				console.log("params:"+JSON.stringify(params))
				console.log("strObj:"+JSON.stringify(strObj))
				console.log("url:"+host + that.hostData.getUserToken)
				fetch.fetch({
					url    : host + that.hostData.getUserToken,
					data   : JSON.stringify(params),
					header : strObj,
					method : 'POST',
					success: function (data) {
						console.log("获取访问令牌accessToken："+JSON.stringify(data))
						resolve(data);
					},
					fail: function (data, code) {
						reject(code);
					}
				})
			}else{
				let obj = {
					errorCode: "0000",
					msg      : "参数有误"
				}
				reject(obj)
			}
		});
		return p;
	},
	//绑定设备
	postDeviceBind(params,accessToken){
		let that        = this;
		let objStr      = '';
		if((typeof params) === 'object'){
			objStr = JSON.stringify(params);
		}
		let strObj = {
			"appId"       : appid,
			"timestamp"   : that.getTimestamp(),
			"nonce"       : that.createUUID(),
			'accessToken': accessToken,
			"Content-Type": 'application/json'
		}
		    strObj.signature = that.getSignatureDeviceBind(objStr,strObj.accessToken,strObj.nonce,strObj.timestamp)
		var p                = new Promise(function(resolve, reject){
			if((typeof params) === 'object'){
				console.log("params:"+JSON.stringify(params))
				console.log("strObj:"+JSON.stringify(strObj))
				console.log("url:"+host + that.hostData.postDeviceBind)
				fetch.fetch({
					url    : host + that.hostData.postDeviceBind,
					data   : JSON.stringify(params),
					header : strObj,
					method : 'POST',
					success: function (data) {
						console.log("绑定设备："+JSON.stringify(data))
						resolve(data);
					},
					fail: function (data, code) {
						reject(data);
					}
				})
			}else{
				let obj = {
					errorCode: "0000",
					msg      : "参数有误"
				}
				reject(obj)
			}
		});
		return p;
	},
	//设备控制接口
	postDeviceControl(params,accessToken){
		let that        = this;
		let objStr      = '';
		if((typeof params) === 'object'){
			objStr = JSON.stringify(params);
		}
		console.log("请求开始时间戳："+that.getTimestamp())
		let strObj = {
			"appId"       : appid,
			"timestamp"   : that.getTimestamp(),
			"nonce"       : that.createUUID(),
			'accessToken': accessToken,
			"Content-Type": 'application/json'
		}
		    strObj.signature = that.getSignatureDeviceBind(objStr,strObj.accessToken,strObj.nonce,strObj.timestamp)
		var p                = new Promise(function(resolve, reject){
			if((typeof params) === 'object'){
				console.log("params:"+JSON.stringify(params))
				console.log("strObj:"+JSON.stringify(strObj))
				console.log("url:"+host + that.hostData.postDeviceControl)
				fetch.fetch({
					url    : host + that.hostData.postDeviceControl,
					data   : JSON.stringify(params),
					header : strObj,
					method : 'POST',
					success: function (data) {
						console.log("设备控制："+JSON.stringify(data))
// 						prompt.showDialog({
// 							title: '操作返回的属性',
// 							message: "操作返回的属性："+ JSON.stringify(data),
// 							buttons: [{
// 								text: '确定',
// 								color: '#33dd44'
// 							}],
// 							success: function (data) {
// 							},
// 							cancel: function () {
// 								console.log('handling cancel')
// 							},
// 							fail: function (data, code) {
// 								console.log(`handling fail, code = ${code}`)
// 							}
// 						})
						resolve(data);
					},
					fail: function (data, code) {
						reject(data);
					}
				})
			}else{
				let obj = {
					errorCode: "0000",
					msg      : "参数有误"
				}
				reject(obj)
			}
		});
		return p;
	},
	//解绑设备
	postDeviceunBind(params,accessToken){
		let that        = this;
		let objStr      = '';
		if((typeof params) === 'object'){
			objStr = JSON.stringify(params);
		}
		let strObj = {
			"appId"       : appid,
			"timestamp"   : that.getTimestamp(),
			"nonce"       : that.createUUID(),
			'accessToken': accessToken,
			"Content-Type": 'application/json'
		}
		    strObj.signature = that.getSignatureDeviceBind(objStr,strObj.accessToken,strObj.nonce,strObj.timestamp)
		var p                = new Promise(function(resolve, reject){
			if((typeof params) === 'object'){
				console.log("params:"+JSON.stringify(params))
				console.log("strObj:"+JSON.stringify(strObj))
				console.log("url:"+host + that.hostData.postDeviceunBind)
				fetch.fetch({
					url    : host + that.hostData.postDeviceunBind,
					data   : JSON.stringify(params),
					header : strObj,
					method : 'POST',
					success: function (data) {
						console.log("解绑设备:"+host + JSON.stringify(data))
						resolve(data);
					},
					fail: function (data, code) {
						reject(data);
					}
				})
			}else{
				let obj = {
					errorCode: "0000",
					msg      : "参数有误"
				}
				reject(obj)
			}
		});
		return p;
	},
	//设备状态查询
	postDeviceStatusQuery(params,accessToken){
		let that        = this;
		let objStr      = '';
		if((typeof params) === 'object'){
			objStr = JSON.stringify(params);
		}
		let strObj = {
			"appId"       : appid,
			"timestamp"   : that.getTimestamp(),
			"nonce"       : that.createUUID(),
			'accessToken': accessToken,
			"Content-Type": 'application/json'
		}
		    strObj.signature = that.getSignatureDeviceBind(objStr,strObj.accessToken,strObj.nonce,strObj.timestamp)
		var p = new Promise(function(resolve, reject){
			if((typeof params) === 'object'){
				console.log("params:"+JSON.stringify(params))
				console.log("strObj:"+JSON.stringify(strObj))
				console.log("url:"+host + that.hostData.postDeviceStatusQuery)
				fetch.fetch({
					url    : host + that.hostData.postDeviceStatusQuery,
					data   : JSON.stringify(params),
					header : strObj,
					method : 'POST',
					success: function (data) {
						console.log("设备状态:"+JSON.stringify(data))
// 						prompt.showDialog({
// 													title: '操作返回的属性',
// 													message: "操作返回的属性："+ JSON.stringify(data),
// 													buttons: [{
// 														text: '确定',
// 														color: '#33dd44'
// 													}],
// 													success: function (data) {
// 													},
// 													cancel: function () {
// 														console.log('handling cancel')
// 													},
// 													fail: function (data, code) {
// 														console.log(`handling fail, code = ${code}`)
// 													}
// 												})
						resolve(data);
					},
					fail: function (data, code) {
						reject(data);
					}
				})
			}else{
				let obj = {
					errorCode: "0000",
					msg      : "参数有误"
				}
				reject(obj)
			}
		});
		return p;
	},
	//获取设备列表
	getDeviceLists(params,accessToken){
		let that        = this;
		let objStr      = '';
		if((typeof params) === 'object'){
			objStr = JSON.stringify(params);
		}
		let strObj = {
			"appId"       : appid,
			"timestamp"   : that.getTimestamp(),
			"nonce"       : that.createUUID(),
			'accessToken': accessToken,
			"Content-Type": 'application/json'
		}
		    strObj.signature = that.getSignatureDeviceBind(objStr,strObj.accessToken,strObj.nonce,strObj.timestamp)
		var p = new Promise(function(resolve, reject){
			if((typeof params) === 'object'){
				console.log("params:"+JSON.stringify(params))
				console.log("strObj:"+JSON.stringify(strObj))
				console.log("url:"+host + that.hostData.getDeviceList)
				fetch.fetch({
					url    : host + that.hostData.getDeviceList,
					data   : JSON.stringify(params),
					header : strObj,
					method : 'POST',
					success: function (data) {
						
						console.log("设备列表:"+host + JSON.stringify(data))
						resolve(data);
					},
					fail: function (data, code) {
						reject(data);
					}
				})
			}else{
				let obj = {
					errorCode: "0000",
					msg      : "参数有误"
				}
				reject(obj)
			}
		});
		return p;
	},
	//获取配网指引信息
	getConfigWorkHelp(params){
		let that = this;
		var p    = new Promise(function(resolve, reject){
			if((typeof params) === 'object'){
				fetch.fetch({
					url    : that.hostData.getConfigWorkHelp,
					data   : params,
					method : 'GET',
					success: function (data) {
						console.log("配网指引:"+JSON.stringify(data))
						resolve(data);
					},
					fail: function (data, code) {
						reject(data + "code:" + code);
					}
				})
			}else{
				let obj = {
					errorCode: "0000",
					msg      : "参数有误"
				}
				reject(obj)
			}
		});
		return p;
	},
	//错误码code
	getCode(code,msg){
		let str = code.toString();
		let data = '';
		switch(str){
			case '9999':
				data = '系统错误'
			break;
			case '3001':
				data = '请求的地址不存在'
			break;
			case '3002':
				data = "请求的HTTP METHOD不支持，请检查是否选择了正确的POST/GET方式"
			break;
			case '3003':
				data = "缺少必备参数"
			break;
			case '3004':
				data = "参数值错误"
			break;
			case '3155':
				data = "设备已被解除绑定"
			break;
			case '3156':
				data = "refreshToken不存在"
			break;
			case '3157':
				data = "refreshToken过期"
			break;
			case '3158':
				data = "token过期"
			break;
			case '3159':
				data = "token不存在"
			break;
			case '3138':
				data = "设备控制超时，请重试"
			break;
			default:
			  data = msg
			break;
		}
		return data;
	},
	//错误码status
	getStatus(code,msg){
		let str = code.toString();
		let data = '';
		switch(str){
			case '-1':
				data = '设备已被解除绑定'
			break;
			case '-2':
				data = '设备无此属性'
			break;
			case '-3':
				data = "此属性是不可操作的"
			break;
			case '-4':
				data = "无效的subscriptionId"
			break;
			case '-5':
				data = "设备当前状态不支持此操作"
			break;
// 			case '-100':
// 				data = "未知错误"
// 			break;
			default:
				data = msg
			break;
		}
		return data;
	},
	//websocket
	// createWebsocket
	createWensocket(deviceid){
		let did = deviceid;
		let p = new Promise(function(resolve, reject){
			device.getInfo({
				success: function (ret) {
					if(ret.brand === 'vivo'){
						appid  = appidForvivo;
						appkey = appkeyForvivo;
					}else{
						appid  = appidForoppo;
						appkey = appkeyForoppo;
					}
							let len = appkey.length;
							let s = Math.floor(Math.random()*(len-12));
// 							prompt.showToast({
// 								message: url + '/simplews/status/fetch?appId=' + appid + '&s=' + s + '&l=10&key=' + appkey.substring(s,s+10) + '&did=' + did,
// 								duration:1
// 							})
							let ws = websocketfactory.create({
								url: url + '/simplews/status/fetch?appId=' + appid + '&s=' + s + '&l=10&key=' + appkey.substring(s,s+10) + '&did=' + did,
								header:{
									'content-type': 'application/json'
								},
							})
							resolve(ws)
							// return ws;
				}
			})
		})
		return p;
	},
}