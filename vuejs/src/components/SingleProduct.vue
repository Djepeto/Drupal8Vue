<template lang="html">
<div>
  <div class="product" v-if="product[2]">
    <h1 class="post__title">{{ product[0].title }}</h1>
    <p class="post__body">{{ product[0].body }}</p>
      <router-link to="/products">Go back</router-link>
      <p><strong> {{product.title}}</strong></p>
      <p><strong>Price:</strong><br> {{product.field_price}}</p>
  </div>
  </div>
</template>

<script>

  import axios from 'axios';

  export default {
    name: 'product',
    props: ['id'],

    data () {
      return {
        product: [],
        endpoint: 'http://drupalvue.dev.loc/products/',
      }
    },

    methods: {
      getProduct(id) {
        axios(this.endpoint + id)
            .then(response => {
              this.product = response.data;
            })
            .catch(error => {
              console.log('-----error-------');
              console.log(error);
            })
      }
    },
    created() {
      this.getProduct(this.id);
    },
    watch: {
      '$route'() {
        this.getProduct(this.id);
      }
    }
  }

</script>

<style scoped>
    .movies{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-column-gap: 20px;
    }
    .single-product {
        background: rgba(233, 213,87, 0.3);
        padding: 10px;
        margin: 10px;
    }
    img{
        background-color: #0c97ed;
        width: 100%;
    }
</style>
