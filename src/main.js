import Vue from "vue";
import App from "./App.vue";
import store from "@/store/index";
import audio from "@/assets/music/button.mp3";
import router from "@/router/index";
import { imgUrlBase } from "@/api/config";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import axios from "axios";
import "lib-flexible";
import jquery from "jquery";
Vue.use(VueAwesomeSwiper);
Vue.prototype.$ = jquery;
Vue.config.productionTip = false;
Vue.prototype.$imgUrlBase = imgUrlBase;

// vue原型添加点击音效
Vue.prototype.playAudio = () => {
  let buttonAudio = document.getElementById("eventAudio");
  buttonAudio.setAttribute("src", audio);
  buttonAudio.play();
};

// vue原型添加点击音效
document.body.addEventListener("click", function(e) {
  let event = e || window.event;
  let target = event.target || event.srcElement;
  let clickMusic = target.getAttribute("clickMusic");
  if (clickMusic === "true") Vue.prototype.playAudio();
  else return false;
});

// 判断环境变量
if (process.env.NODE_ENV === "production") {
  if (process.env.VUE_APP_CURRENTMODE === "prod") {
    //production 生产环境
    axios.defaults.baseURL = "http://m.qxy37.com/wapapis";
    console.log("线上环境");
  } else {
    //test 测试环境
    axios.defaults.baseURL = "http://m.qxy37.net/wapapis";
    console.log("测试环境");
  }
} else {
  axios.defaults.baseURL = "http://m.qxy37.com/wapapis";
  console.log("本地开发", axios.defaults.baseURL);
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
