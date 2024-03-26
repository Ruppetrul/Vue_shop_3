<script setup>
  import Item from './Item.vue';
  import axios from 'axios';
  import { ref } from 'vue';

  const items = ref([]);

  axios.get('/api/products?only_data=1&page=1')
      .then(response => {

        const products = response.data.products.data;
        for (const product of products) {
          items.value.push(product);
        }
      })
      .catch(error => {
        console.error('Ошибка при получении списка продуктов:', error);
      });
</script>

<template>
  <div class="row row-cols-3">
    <Item v-for="(item, index) in items" :key="index" :itemData="item" />
  </div>
</template>

<style scoped>
</style>
