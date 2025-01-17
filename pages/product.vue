<template>
  <div class="main-product">
    <h1>فروشگاه</h1>
    <div class="products container">
      <UtilsCard v-for="(index , product) in products" :key="index" class="product-card col-md-4 " :price="product.price"
        :image="useRuntimeConfig().public.apiBase + '/' + product.image" :title="product.name"
        :description='product.description' />
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
.main-product {
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