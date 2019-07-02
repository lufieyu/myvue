import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shouye from '@/components/shouye'
import Yingyin from '@/components/yingyin'
import Guangbo from '@/components/guangbo'
import Xiaozu from '@/components/xiaozu'
import Wode from '@/components/wode'
import Film from '@/components/film'
import Read from '@/components/read'
import Television from '@/components/television'
import Same_city from '@/components/same_city'
import Music from '@/components/music'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shouye',
      component: Shouye
    },
    {
      path: '/shouye',
      name: 'Shouye',
      component: Shouye
    },
    {
      path: '/yingyin',
      name: 'Yingyin',
      component: Yingyin,
      children: [
        {
          path: '/',
          name: 'film',
          redirect: 'film',
        },
        {
          path: 'film',
          name: 'Film',
          component: Film,
        },
        {
          path: 'read',
          name: 'Read',
          component: Read,
        },
        {
          path: 'television',
          name: 'Television',
          component: Television,
        },
        {
          path: 'same_city',
          name: 'Same_city',
          component: Same_city,
        },
        {
          path: 'music',
          name: 'Music',
          component: Music,
        },
      ]
    },
    {
      path: '/guangbo',
      name: 'Guangbo',
      component: Guangbo
    },
    {
      path: '/xiaozu',
      name: 'Xiaozu',
      component: Xiaozu
    },
    {
      path: '/wode',
      name: 'Wode',
      component: Wode
    }
  ]
})
