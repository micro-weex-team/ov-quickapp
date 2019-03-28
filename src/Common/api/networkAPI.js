import IOT from '@service.iot';
import prompt from '@system.prompt';

const clientId = 'db3924f6431a4c461667bd164a4ab1fb';
const clientSecret = 'o8dk8vm6cbuyxdrl4se4c6i3h4tdea9b';

// let $Lanonline = {
// 	deviceid:'',
// 	isonLan:"false"
// }
export default {
	$Lanonline:{
		deviceid:'',
		isonLan:"false"
	},
	mes: {
		clientId: 'db3924f6431a4c461667bd164a4ab1fb',
		clientSecret: 'o8dk8vm6cbuyxdrl4se4c6i3h4tdea9b'
	},
	//获取二维码解析
	lanHelpInit() {
		let that = this;
		let params = {
			token: 'Bearer mideaIotOpenAccessToken',
			clientId: that.mes.clientId,
			clientSecret: that.mes.clientSecret
		}
		console.log("setAccount:" + JSON.stringify(params))
		let p = new Promise(function(resolve, reject){
			IOT.send({
				action: 'sendAccount',
				data: params,
				success: function(res) {
					console.log("初始化："+JSON.stringify(res));
					resolve(res)
				},
				fail: function(data, code) {
					reject(data)
				}
			});
		})
		return p;
	},
	//局域网控制
	/**
	 * 1.初始化
	 */
	deviceInit(token, deviceID) {
		let that = this;
		let params = {
			token: token,
			clientId: that.mes.clientId,
			clientSecret: that.mes.clientSecret
		}
		console.log("setAccount:" + JSON.stringify(params))
		// 		prompt.showToast({
		// 			message:"params:"+JSON.stringify(params)
		// 		})
		let p = new Promise(function(resolve, reject){
			IOT.send({
				action: 'sendAccount',
				data: params,
				success: function(res) {
					console.log("初始化："+JSON.stringify(res));
					IOT.send({
						action: 'CustomerHandler.addDevice',
						data: deviceID,
						success: function(res) {
							that.LanGetData(deviceID);
							resolve(res)
						},
						fail: function(data, code) {
							reject(data)
						}
					})
				},
				fail: function(data, code) {
					reject(data)
				}
			});
		})
		return p;
	},
	/**
	 * 2.添加设备局域网广播监控
	 */
	addDevice(deviceID) {
		let that = this;
		let params = {
			deviceId: deviceID
		}
		IOT.send({
			action: 'CustomerHandler.addDevice',
			data: deviceID,
			success: function(res) {
				// 				prompt.showToast({
				// 					message:"addDevice:"+JSON.stringify(res)
				// 				})
			},
			fail: function(data, code) {
				prompt.showToast({
					message: "fail:" + JSON.stringify(data),
					duration: 1
				})
			}
		})
	},
	/**
	 * 3.局域网在线
	 * 
	 */
	deviceLan(deviceId) {
		let that = this;
		let params = {
			deviceId: deviceId
		}
		let p = new Promise(function(resolve, reject){
			if(deviceId == ''){
				let obj = {
					errorCode: "0000",
					msg      : "参数有误"
				}
				reject(obj)
			}else{
				IOT.send({
					action: 'CustomerHandler.getLanState',
					data: deviceId,
					success: function(res) {
						let data = (typeof res) === 'object'?res:JSON.parse(res);
						console.log("局域网是否在线：" + JSON.stringify(res))
						if(data.message.toString() == '1'){
							resolve(data);
						}else{
							let obj = {
								errorCode: "0001",
								msg      : data.message?data.message:"局域网不在线"
							}
							reject(obj);
						}
					},
					fail: function(data, code) {
						let obj = {
							errorCode: "000"+code,
							msg      : JSON.stringify(data)
						}
						reject(obj);
					}
				})
			}
		})
		return p
	},
	/**
	 * 监听设备在线状态
	 * 
	 */
	LanGetData(deviceId){
		let that = this;
		let params = {
			deviceId: deviceId
		}
		// let p = new Promise(function(resolve, reject){
			IOT.send({
				action: 'CustomerHandler.registerStateListener',
				data: deviceId,
				success: function(res) {
					console.log("成功了："+JSON.stringify(res));
					let data = (typeof res) === 'object'?res:JSON.parse(res);
					if(data.message.toString() == '1'){
						that.$Lanonline.deviceid = deviceId;
						that.$Lanonline.isonLan = "true";
						// resolve(data);
					}else{
						let obj = {
							errorCode: "0001",
							msg      : data.message?data.message:"局域网不在线"
						}
						that.$Lanonline.deviceid = deviceId;
						that.$Lanonline.isonLan = "false";
						// reject(obj);
					}
				},
				fail: function(data, code) {
					that.$Lanonline.deviceid = deviceId;
					that.$Lanonline.isonLan = "false";
					console.log("失败了"+JSON.stringify(data));
					// reject(data)
				}
			})
// 		})
// 		return p;
	},
	/**
	 * 设备状态查询
	 */
	getqueryDeviceStatus(deviceId){
		let that = this;
		let params = {
			deviceId: deviceId
		}
		let p = new Promise(function(resolve, reject){
			IOT.send({
				action: 'queryDeviceStatus',
				data: {
					deviceInfo:{
						deviceUuid:deviceId
					}
				},
				success: function(res) {
					console.log("设备信息："+JSON.stringify(res));
					resolve(res)
					// 				prompt.showToast({
					// 					message:"addDevice:"+JSON.stringify(res)
					// 				})
				},
				fail: function(data, code) {
					console.log("设备信息失败了"+JSON.stringify(data));
					reject(data)
				}
			})
		})
		return p;
	},
	/**
	 * 设备状态查询
	 */
	setDeviceStatus(deviceId,params){
		let that = this;
		let p = new Promise(function(resolve, reject){
			IOT.send({
				action: 'updateDeviceStatus,',
				data: {
					deviceInfo:{
						deviceUuid:deviceId
					},
					controlData:params
				},
				success: function(res) {
					console.log("控制设备："+JSON.stringify(res));
					resolve(res)
					// 				prompt.showToast({
					// 					message:"addDevice:"+JSON.stringify(res)
					// 				})
				},
				fail: function(data, code) {
					console.log("控制设备失败了"+JSON.stringify(data));
					reject(data)
				}
			})
		})
		return p;
	},
	/**
	 * 配网二维码解析
	 */
	getInfoByQrCode(url){
		console.log("跑到二维码解析了"+url)
		let that = this;
		let params = {
			token: 'Bearer mideaIotOpenAccessToken',
			clientId: that.mes.clientId,
			clientSecret: that.mes.clientSecret
		}
		let p = new Promise(function(resolve, reject){
			IOT.send({
				action: 'sendAccount',
				data: params,
				success: function(res) {
					console.log("二维码解析初始化："+JSON.stringify(res));
					IOT.send({
						action: 'CustomerHandler.getDeviceInfoByQrCode',
						data: url,
						success: function(res) {
							console.log("解析结果："+JSON.stringify(res));
							resolve(res)
						},
						fail: function(data, code) {
							console.log("解析失败了"+JSON.stringify(data));
							reject(data)
						}
					})
				},
				fail: function(data, code) {
					reject(data)
				}
			});
			
		})
		return p;
	},
	/**
	 * 设备扫描
	 * 
	 */
	startScanDeviceWifi(deviceId) {
		let params = {
			deviceId: deviceId
		}
		console.log("设备扫描")
		IOT.send({
			action: 'scanDevice',
			data: {
				timeout: 5000
			},
			success: function(res) {
				console.log("设备扫描：" + JSON.stringify(res))
				prompt.showToast({
					message: "scanDevice:" + JSON.stringify(res),
					duration: 1
				})
			},
			fail: function(data, code) {
				prompt.showToast({
					message: "fail:" + JSON.stringify(data),
					duration: 1
				})
			}
		})
	},
	/**
	 * 配网埋点
	 * 
	 */
	statisticReport(params){
		IOT.send({
			action:'statisticReport',
			data:params,
			success: function(data) {
				console.log('埋点信息：'+JSON.stringify(data))
			},
			fail: function(data, code) {
				console.log(JSON.stringify(data))
			}
		})
	}
	
}
