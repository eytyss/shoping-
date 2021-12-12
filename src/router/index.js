import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'All Products',
    component:()=> import('../views/AllProducts')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/AllProducts',
    name: 'All Products',
    component:()=> import('../views/AllProducts')
  },
  {
    path: '/smartphones',
    name: 'smartphones',
    component:()=> import('../views/Smartphones')
  }
  ,
  {
    path: '/tablets',
    name: 'Tablets',
    component:()=> import('../views/Tablets')
  }
  ,
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue"),
  }
]

const router = new VueRouter({
  routes
})

export default router;
