/**
 * 环境配置文件
 */

import device from '@system.device';

const setHost = false;//false：sit环境；true：pro环境



let appidForvivo = 2150;
let appkeyForvivo = '';
let appidForoppo = 2149;
let appkeyForoppo = '';
let host = '';
let url = "";
let getcenterHelp = '';
let clientIdvivo = "5ae235bbf44ae157689e539437a8b4f1";
let clientIdoppo = "660354a2ee1f1ed1a6a6b96fb22b14ea";
let clientSecretoppo = "";
let clientSecretvivo = "";

if(setHost){
	appkeyForvivo = '00498c1bb52ad5d4d81eca53dae47fd1';
	appkeyForoppo = 'ddb2668091508e243cc3b9570d094164';
	clientSecretvivo = "68045971e0f8bd4d7d51ed4989c4412a";
	clientSecretoppo = "9e8eb1c20757450c644fabcd8d5cd9c7";
	host = 'https://ov-prod.smartmidea.net';
	url = "wss://ovws-sit.smartmidea.net";
	getcenterHelp = '';
}else{
	appkeyForvivo = 'c2db6cbc7609febb7c54f0df5234506c';
	appkeyForoppo = 'b37142d426c90ddc1b28d1182f363384';
	clientSecretvivo = "916925b48506ce2f17a4b5f80a6d20ec";
	clientSecretoppo = "5a50ff3716862bf90ac763d61459e0ef";
	url = "ws://ovws-sit.smartmidea.net";
	host = 'http://ov-sit.smartmidea.net';
	getcenterHelp = 'https://api-sit.smartmidea.net/v1/open/connect/guide/list';
}

let appid = '';
let appkey = '';
let clientId = '';
let clientSecret = "";
device.getInfo({
	success: function (ret) {
		if(ret.brand === 'vivo'){
			appid  = appidForvivo;
			appkey = appkeyForvivo;
			clientId = clientIdvivo;
			clientSecret = clientSecretvivo;
		}else{
			appid  = appidForoppo;
			appkey = appkeyForoppo;
			clientId = clientIdoppo;
			clientSecret = clientSecretoppo;
		}
	}
})
export default {
	infoMain:{
		setHost:setHost,
		host:host,
		url:url,
		appid:appid,
		appkey:appkey,
		clientId:clientId,
		clientSecret:clientSecret,
		getcenterHelp:getcenterHelp
	}
}