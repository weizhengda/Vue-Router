import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Address from '@/pages/Address'
import News from '@/pages/News'
import Art from '@/pages/news/Art'
import Play from '@/pages/news/Play'
import Music from '@/pages/news/Music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      children: [
        {
          path: 'play',
          component: Play
        },
        {
          path: 'art',
          component: Art
        },
        {
          path: 'music',
          component: Music
        }
      ]
    }
  ]
})
