<script setup>
  import SearchPanel from "@/components/main/SearchPanel.vue";
  import TopFilterPanel from "@/components/main/TopFilterPanel.vue";
  import ItemsPanel from "@/components/main/ItemsPanel.vue";
  import axios from "axios";
  import {ref} from "vue";

  const items = ref([]);
  let page = 1;

  let search = '';
  let order = '';

  function change_search_filter(search_filter) {
    search = search_filter;
    fetchItems();
  }

  function change_order_filter(order_filter) {
    order = order_filter;
    fetchItems();
  }

  function fetchItems() {
    const params = new URLSearchParams(
        {
          only_data: 1,
          page: page,
          search: search,
          priority_filter: order
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
        <SearchPanel :change_search_filter="change_search_filter"/>
        <TopFilterPanel :change_order_filter="change_order_filter"/>
        <ItemsPanel :items="items"/>
    </div>
  </div>
</template>

<style scoped>
  .container {
    padding-top: 10px;
  }
</style>
