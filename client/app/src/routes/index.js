import {createRouter, createWebHistory} from 'vue-router'
import AuthenticatedLayout from "../pages/layout/AuthenticatedLayout.vue"
import Dashboard from '../pages/Dashboard.vue'
import Directory from '../pages/Directory.vue'
import notFound from '../pages/NotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
      path: "/",
      component: AuthenticatedLayout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "/",
          name: "directory",
          component: Directory,
        },
      ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: notFound,
    }
    ]
})

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => window.HSStaticMethods.autoInit(), 100)
  }
})

export default router