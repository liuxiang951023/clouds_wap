import Vue from "vue";
import Vuex from "vuex";
import shopCar from "./shopCar/index";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    token: "",
    number: localStorage.getItem("number") || 1,
  },
  mutations: {
    addNumber(state, data) {
      if (data >= 0 && data < 30) {
        data++;
      } else {
        alert("已经达到了巅峰");
      }
      localStorage.setItem("number", data);
      state.number = localStorage.getItem("number");
    },
    delNumber(state, data) {
      if (data <= 30 && data > 0) {
        data--;
      } else {
        alert("已经到底了");
      }
      localStorage.setItem("number", data);
      state.number = localStorage.getItem("number");
    },
  },
  actions: {
    // setAllStep(context, data) {
    //   context.commit("setshopPrice", data);
    // },
    add(context, data) {
      context.commit("addNumber", data);
    },
    del(context, data) {
      context.commit("delNumber", data);
    },
  },
  getters: {},
  modules: {
    shopCar,
  },
});
