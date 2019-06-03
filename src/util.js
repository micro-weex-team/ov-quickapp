
/**
 * 快应用环境配置
 */

export default {
	hostData:{
		setHost:false,//配置环境（true：pro环境；false：sit环境）
		type:["ac","ca","b0","b1","b2","db","e2","ea","fa","fc","fd","e1","e3","b8","b6"],//支持的设备
	},
	setHeight(){
		let that = this;
		// console.log("app参数："+JSON.stringify(that.$app))
	},
}
