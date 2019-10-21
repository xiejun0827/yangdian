import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import classify from '@/components/classify'
import classifyTwo from '@/components/classify/classify-two'
import classifyThree from '@/components/classify/classify-three'
import classifyFour from '@/components/classify/classify-four'
import classifyFive from '@/components/classify/classify-five'
import classifySix from '@/components/classify/classify-six'
import detailsTwo from '@/components/details/details-two'
import detailsThree from '@/components/details/details-three'
import Shop from '@/components/shop'
import My from '@/components/my'
import Nav from '@/components/nav'
import Details from '@/components/details'
import Login from '@/components/login'
import Zuce from '@/components/zuce'
import Goo from '@/components/goo'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/nav',
      component: Nav,
      children:[
        {
          path: '/index',
          component: Index,
        },
        {
          path: '/classify',
          component: classify,
          children:[
            {
              path: '/classify/classify-two',
              component: classifyTwo,
            },
            {
              path: '/classify/classify-three',
              component: classifyThree,
            },
            {
              path: '/classify/classify-four',
              component: classifyFour,
            },
            {
              path: '/classify/classify-five',
              component: classifyFive,
            },
            {
              path: '/classify/classify-six',
              component: classifySix,
            },
            {
              path: '/classify',
              component:classifyTwo
            },
          ]
        },
        {
          path: '/shop',
          component: Shop,
        },
        {
          path: '/my',
          component: My,
        },
        {
          path:'/goo',
          component:Goo
        },

      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/zuce',
      component:Zuce
    },
    {
      path: '/details',
      component: Details,
      children:[
        {
          path:"/details/details-two",
          component:detailsTwo
        },
        {
          path:"/details/details-three",
          component:detailsThree
        },
        {
          path: '/details',
          redirect:"/details/details-two"
        },
      ],
    },
    {
      path: '/*',
      redirect:"/index"
    }
  ]
})
