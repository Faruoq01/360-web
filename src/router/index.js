import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: "/",
          name: 'dashboard',
          component: () => import('../components/Home/Dashboard/Dashboard.vue')
        },
        {
          path: "/settings",
          name: 'settings',
          component: () => import('../components/Home/Dashboard/Settings.vue')
        },
        {
          path: "/feeds",
          name: 'feeds',
          component: () => import('../components/Home/Dashboard/Feeds.vue')
        },
        {
          path: "/user-management",
          name: 'user',
          component: () => import('../components/Home/Dashboard/UserManagement.vue')
        },
        {
          path: "/contact-management",
          name: 'contact',
          component: () => import('../components/Home/Dashboard/ContactManagement.vue')
        },
        {
          path: "/department",
          name: 'department',
          component: () => import('../components/Home/Dashboard/Departments.vue')
        },
        {
          path: "/shedule",
          name: 'schedule',
          component: () => import('../components/Home/Dashboard/Schedule.vue')
        },
        {
          path: "/inventory",
          name: 'inventory',
          component: () => import('../components/Home/Dashboard/Inventory.vue')
        },
        {
          path: "/sales",
          name: 'sales',
          component: () => import('../components/Home/Dashboard/Sales.vue')
        },
        {
          path: "/companies",
          name: 'companies',
          component: () => import('../components/Home/Dashboard/Companies.vue')
        },
        {
          path: "/request",
          name: 'request',
          component: () => import('../components/Home/Dashboard/Requests.vue')
        },
        {
          path: "/messaging",
          name: 'messaging',
          component: () => import('../components/Home/Dashboard/Messaging.vue')
        },
        {
          path: "/conferencing",
          name: 'conferencing',
          component: () => import('../components/Home/Dashboard/Conferencing.vue')
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      children: [
        {
          path: "/login",
          name: 'login-pane',
          component: () => import('../components/Login/LoginPane.vue')
        },
        {
          path: "/register",
          name: 'register',
          component: () => import('../components/Login/Register.vue')
        },
        {
          path: "/forgot-password",
          name: 'forgot',
          component: () => import('../components/Login/ForgotPassword.vue')
        },
        {
          path: "/password-mail",
          name: 'pass-mail',
          component: () => import('../components/Login/PassNotification.vue')
        },
        {
          path: "/reset-pass",
          name: 'reset-pass',
          component: () => import('../components/Login/ResetPassword.vue')
        },
      ],
    }
  ]
})

export default router
