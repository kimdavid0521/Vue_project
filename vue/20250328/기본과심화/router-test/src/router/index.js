import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Members from "@/pages/Members.vue";
import MemberInfo from "@/pages/MemberInfo.vue";
import Videos from "@/pages/Videos.vue";
import NotFound from "@/pages/NotFound.vue";

const membersIdGuard = (to, from) => {
  if (from.name !== "members" && from.name !== "members/id") {
    return false;
  }
};

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
      component: About,
    },
    {
      path: "/members",
      name: "members",
      component: Members,
    },
    {
      path: "/members/:id",
      name: "members/id",
      component: MemberInfo,
      beforeEnter: membersIdGuard,
    },
    {
      path: "/videos",
      name: "videos",
      component: Videos,
    },
    {
      path: "/:paths(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
