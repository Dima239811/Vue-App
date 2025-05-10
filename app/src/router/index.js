import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/pages/IndexPage.vue'
import Technologies from '@/pages/Technologies.vue'
import YourWayPage from '@/pages/YourWayPage.vue'
import CoursesList from '@/components/CoursesList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPage,
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: Technologies ,
    },
    {
        path: '/yourWayPage',
        component: YourWayPage
    },
    {
      path: '/coursesList',
      component: CoursesList,
    },
  ],
})

export default router
