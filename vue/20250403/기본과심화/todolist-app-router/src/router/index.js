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
      path: "/about",
      name: "about",

      // 레이지 로딩 -> get요청이왔을때 로딩을 하겠다 처음부터 한번에 와ㅏ아악하면 느려지니까

      component: () => import("../pages/About.vue"),
    },
    {
      path: "/todos",
      name: "todos",

      component: () => import("../pages/TodoList.vue"),
    },
    {
      path: "/todos/add",
      name: "add",

      component: () => import("../pages/AddTodo.vue"),
    },
    {
      path: "/todos/edit/:id",
      name: "edit",

      component: () => import("../pages/EditTodo.vue"),
    },
    {
      path: "/:paths(.*)*",
      name: "NotFound",
      component: () => import("../pages/NotFound.vue"),
    },
  ],
});

export default router;
