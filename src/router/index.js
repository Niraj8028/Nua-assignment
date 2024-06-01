import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import SearchResults from '../views/SearchPage.vue'
// import citiesInRegion from '../views/citiesInRegion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: '/cities/:countryCode',
    //   name: 'cities',
    //   component: citiesInRegion
    // },
    {
      path: '/search',
      name: 'SearchResults',
      component: SearchResults,
      props: (route) => ({
        countryCode: route.query.countryCode,
        query: route.query.q
      })
    }
  ]
})

export default router
