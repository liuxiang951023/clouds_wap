<template>
  <div class="footer">
    <div class="iconItem"
         :class="{'iconItem2':$route.name === item.name}"
         v-for="(item, index) in iconList"
         :key="index"
         @click="isPlayAudio(item, index)">
      <div :class="item.icon"></div>
      <div class="iconText">{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
import "../assets/iconfont/iconfont.css";
export default {
  data () {
    return {
      navStyle: false,
      active: 0,
      iconList: [
        { icon: "iconfont iconhome", title: "首页", link: "/index", name: 'home' },
        { icon: "iconfont iconshop", title: "云淘", link: "/cloudShop", name: 'cloudShop' },
        {
          icon: "iconfont iconi-shoping-car",
          title: "购物车",
          link: "/shopCar",
          name: 'shopCar'
        },
        { icon: "iconfont iconwode", title: "我的", link: "/my", name: 'my' },

        {
          path: "login",
          name: "login",
          meta: {
            title: "登录",
          },
          component: () => import("@/pages/my/login.vue"),
        },
      ],
    };
  },
  methods: {
    isPlayAudio (item, index) {
      this.$router.push({ name: item.name });
      this.playAudio();
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 40px;
  position: fixed;
  display: flex;
  flex-direction: row;
  z-index: 100;
  justify-content: space-around;
  bottom: 0;
  margin: 0 auto;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  .iconItem {
    text-align: center;
    margin-left: 50px;
    font-weight: 600;
    padding-top: 4px;
  }
  .iconItem2 {
    color: #ff9900;
    font-weight: 600;
    text-align: center;
    padding-top: 4px;
  }
}
</style>
