import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import BudgetView from "../views/budget/BudgetView.vue";
import NewBudgetView from "../views/budget/NewBudgetView.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: DashboardView,
  },
  {
    path: "/budget",
    name: "budget",
    component: BudgetView,
    children: [
      {
        path: 'new',
        component: NewBudgetView
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
