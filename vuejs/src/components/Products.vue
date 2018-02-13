<template>
    <div >
        <h1>This is my products page</h1>
        <div class="products">
            <div v-for="product in products" :key="product.title" class="single-product">
                <router-link :to="{ name: 'product', params: { id: product.nid } }" :key="product.nid">
                    <img v-bind:src="'http://drupalvue.dev.loc' + product.field_product_image"/>
                </router-link>
                <p><strong> {{product.title}}</strong></p>
                <p><strong>Price:</strong><br> {{product.field_price}}</p>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        products: [],
        endpoint: 'http://drupalvue.dev.loc/products',
        search: '',
      }
    },
    created() {https://scotch.io/tutorials/build-an-app-with-vue-js-a-lightweight-alternative-to-angularjs#toc-adding-the-listing-area
      this.getAllProducts();
    },
    methods: {
      getAllProducts() {
        axios.get(this.endpoint)
            .then(response => {
              this.products = response.data;
            })
            .catch(error => {
              console.log('-----error-------');
              console.log(error);
            })
      }
    }
  }





</script>

<style scoped>
    .products {
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
