<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
<router-link to="/products">Products</router-link>
  </div>
</template>


<script>
import Home from './components/Home'
import Products from './components/Products'

export default {
  name: 'App',
  components: {
    Home,
    Products
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
