import HomeView from "../views/HomeView.js";
import NotFound from "../views/NotFound.js";
import CreditsView from "../views/CreditsView.js";
const routes = [
  { path: "/", component: HomeView },
  { path: "/credits", name: "credits", component: CreditsView },
  { path: "/:pathMatch(.*)*", name: "notFound", component: NotFound },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
