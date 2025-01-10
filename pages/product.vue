<template>
    <div class="main-product">
      <h1>فروشگاه</h1>
      <div v-for="product in products" :key="product.id" class="product">
        <img :src="useRuntimeConfig().public.apiBase+'/' + product.image" alt="Product Image" />
        <h2>نام :{{ product.name }}</h2>
        <p> توضیخات :{{ product.description }}</p>
        <p>قیمت : {{ product.price }} $</p>
        <p>نوع: {{ product.category.name }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const products = ref([])
  
  const { data, error } = useFetch('/api/products/', {
  baseURL: useRuntimeConfig().public.apiBase,
})

products.value = data.value

  </script>
  
  <style scoped>
  .main-product{
    margin-top: 180px;
  }
  .product {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
  }
  .product img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  </style>
  