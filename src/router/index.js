import Vue from "vue";
import store from "@/store/index";
import Router from "vue-router";
Vue.use(Router);
const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: () => import("@/pages/index.vue"),
    children: [
      {
        path: "/index",
        name: "home",
        meta: {
          title: "首页",
        },
        component: () => import("@/pages/home/index.vue"),
      },
      {
        path: "/cloudShop",
        name: "cloudShop",
        meta: {
          title: "云淘",
        },
        component: () => import("@/pages/cloudShop/index.vue"),
      },
      {
        path: "/shopCar",
        name: "shopCar",
        meta: {
          title: "购物车",
          requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
        component: () => import("@/pages/shopCar/index.vue"),
      },
      {
        path: "/my",
        name: "my",
        meta: {
          title: "我的",
        },
        component: () => import("@/pages/my/index.vue"),
        children: [
          {
            path: "login",
            name: "login",
            meta: {
              title: "登录",
            },
            component: () => import("@/pages/my/login.vue"),
          },
        ],
      },
    ],
  },
];
const router = new Router({
  mode: "history",
  routes,
});
export default router;
