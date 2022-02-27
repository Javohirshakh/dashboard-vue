import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main" },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/recover",
    name: "recover",
    meta: { layout: "empty" },
    component: () => import("../views/Recover.vue"),
  },
  {
    path: "/verification",
    name: "verification",
    meta: { layout: "empty" },
    component: () => import("../views/Verification.vue"),
  },
  {
    path: "/setnewpassword",
    name: "setnewpassword",
    meta: { layout: "empty" },
    component: () => import("../views/SetNewPassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
