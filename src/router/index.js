import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import T1 from '@/components/tab1/T1'
import T2 from '@/components/tab2/T2'
import T3 from '@/components/tab3/T3'
import T4 from '@/components/tab4/T4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/Home/tab1/T1',
          name: 'T1',
          component: T1,
          meta: {title: 'T1'}
        },
        {
          path: '/Home/tab2/T2',
          name: 'T2',
          component: T2,
          meta: {title: 'T2'}
        },
        {
          path: '/Home/tab3/T3',
          name: 'T3',
          component: T3,
          meta: {title: 'T3'}
        },
        {
          path: '/Home/tab4/T4',
          name: 'T4',
          component: T4,
          meta: {title: 'T4'}
        }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
