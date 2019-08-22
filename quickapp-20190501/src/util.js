
/**
 * 快应用环境配置
 */
//家电分类
let arry = [];

// 1、空调
const arry1 = ["ac","00","ab","cc"];
// 2、冰箱
const arry2 = ["ca"];
// 3、洗/干衣机
const arry3 = ["db","da","dc"];
// 4、厨房大电
const arry4 = ["b6","e1","b1"];
// 5、厨房小电
const arry5 = ["b0","ea","f1"];
// 6、热水器
const arry6 = ["e2","e3"];
// 7、生活/清洁
const arry7 = ["b8"];
// 8、环境/照明
const arry8 = ["fc","fa","ce","fd","cf"];
// 9、面板插座
const arry9 = [];
// 10、传感器
const arry10 = [];
// 11、家居安防
const arry11 = [];
// 12、智能音箱
const arry12 = [];
// 13、其他产品
const arry13 = [];

arry = arry.concat(arry1,arry2,arry3,arry4,arry5,arry6,arry7,arry8,arry9,arry10,arry11,arry12,arry13);
export default {
	hostData:{
		setHost:false,//配置环境（true：pro环境；false：sit环境）
		type:arry,//支持的设备
	},
	setHeight(){
	},
}
