import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Circle",
    meta: {
      title: "环形设计",
      keepAlive: true
    },
    component: () => import("@/views/Circle/index.vue"),
  },
  {
    path: "/snow",
    name: "Snow",
    meta: {
      title: "雪花飘飘",
      keepAlive: true
    },
    component: () => import("@/views/Snow/index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/login/:id",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true
    },
    component: () => import("@/views/Login/index.vue"),
  },
  {
    path: "/homeCopy",
    name: "HomeCopy",
    meta: {
      title: "登录2",
      keepAlive: true
    },
    component: () => import("@/views/HomeCopy/index.vue"),
  },
  { path: '/:pathMatch(.*)*',
    component: () => import("@/views/NoFound/index.vue")
  }
];
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(), // 生产环境nginx配置
  routes
});
export default router;