import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Page2 from '@/components/Page2'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/page2/',
      name: 'Page 2',
      component: Page2
    }
  ]
})


// Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     },
//     {
//       path: '/page2/',
//       name: 'Page 2',
//       component: Page2
//     },
//   ]
// })

