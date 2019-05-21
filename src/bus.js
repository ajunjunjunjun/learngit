//bus.js 记录用户是否登陆
import Vue from 'vue';
var bus = new Vue();
bus.islog=false;
//默认登陆为false；
export default bus;
//导出bus