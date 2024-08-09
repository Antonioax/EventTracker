import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import EventDetails from "@/components/EventDetails.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/event/:id",
      name: "event-details",
      props: true,
      component: EventDetails
    }
  ]
});

export default router;
