import EventList from "@/views/EventList.vue";
import About from "@/views/About.vue";
import EventLayout from "@/views/event/EventLayout.vue";
import EventDetails from "@/views/event/EventDetails.vue";
import EventEdit from "@/views/event/EventEdit.vue";
import EventRegister from "@/views/event/EventRegister.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
          component: EventEdit
        },
        {
          path: "register",
          name: "EventRegister",
          component: EventRegister
        }
      ]
    }
  ]
});

export default router;
