import { createRouter, createWebHistory } from "vue-router";

import { publicRoutes } from "./public";

const routes = [...publicRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
