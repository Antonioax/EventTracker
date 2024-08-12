import EventList from "@/views/EventList.vue";
import About from "@/views/About.vue";
import EventLayout from "@/views/event/EventLayout.vue";
import EventDetails from "@/views/event/EventDetails.vue";
import EventEdit from "@/views/event/EventEdit.vue";
import EventRegister from "@/views/event/EventRegister.vue";
import NotFound from "@/views/NotFound.vue";
import NetworkError from "@/views/NetworkError.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "EventList",
      component: EventList,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/event/:id",
      name: "EventLayout",
      props: true,
      component: EventLayout,
      children: [
        {
          path: "",
          name: "EventDetails",
          component: EventDetails
        },
        {
          path: "edit",
          name: "EventEdit",
          component: EventEdit,
          meta: { requireAuth: true }
        },
        {
          path: "register",
          name: "EventRegister",
          component: EventRegister
        }
      ]
    },
    {
      path: "/404/:resource",
      name: "NotFoundResource",
      component: NotFound,
      props: true
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "/network-error",
      name: "NetworkError",
      component: NetworkError
    }
  ]
});

export default router;
