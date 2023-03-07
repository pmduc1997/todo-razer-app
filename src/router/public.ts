const LandingPage = () => import("../pages/LandingPage.vue");

export const publicRoutes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
  },
];
