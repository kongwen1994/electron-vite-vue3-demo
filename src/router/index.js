// import Vue from 'vue'
import * as VueRouter from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'
// import pageB from '../components/pageB.vue'

// Vue.use(VueRouter)

export default VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'hello-world',
      // component:HelloWorld
      component: ()=>import('../components/HelloWorld.vue')
    },
    {
      path: '/pageB',
      name: 'pageB',
      // component:pageB
      component:()=>import('../components/pageB.vue')
    }
  ]
})
