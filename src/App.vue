<script setup>
  import SearchPanel from "@/components/main/SearchPanel.vue";
  import ItemsPanel from "@/components/main/ItemsPanel.vue";
  import axios from "axios";
  import {ref} from "vue";

  const items = ref([]);
  let page = 1;

  function fetchItems(search_filter = '') {
    const params = new URLSearchParams(
        {
          only_data: 1,
          page: page,
          search: search_filter
        }
    );

    axios.get(`/api/products?${params.toString()}`)
      .then(response => {
        items.value = response.data.products.data;
      })
      .catch(error => {
        console.error('Ошибка при получении списка продуктов:', error);
      });
  }
  fetchItems();
</script>

<template>
  <div class="container">
    <div class="container-fluid-lg">
        <SearchPanel :fetchItems="fetchItems"/>
        <ItemsPanel :items="items"/>
    </div>
  </div>
</template>

<style scoped>
  .container {
    padding-top: 10px;
  }
</style>
