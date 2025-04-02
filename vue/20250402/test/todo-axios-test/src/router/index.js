import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/all",
      name: "all",

      // 레이지 로딩 -> get요청이왔을때 로딩을 하겠다 처음부터 한번에 와ㅏ아악하면 느려지니까

      component: () => import("../pages/All.vue"),
    },
    {
      path: "/get/:id",
      name: "get",

      component: () => import("../pages/Get.vue"),
    },
    {
      path: "/post",
      name: "post",

      component: () => import("../pages/Post.vue"),
    },
  ],
});

export default router;
