import util from "../../util.js";

// console.log("util:"+JSON.stringify(util.hostData))
export default {
    getHeight() {
		util.setHeight();
        // console.log("配置信息："+JSON.stringify(this.$app.$def))
    },
}