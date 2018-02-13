import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import SingleProduct from '@/components/SingleProduct'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/products/:id',
      name: 'product',
      component: SingleProduct,
      props: true,
    },
  ]
})
