<script setup>
  import SearchPanel from "@/components/main/SearchPanel.vue";
  import TopFilterPanel from "@/components/main/TopFilterPanel.vue";
  import ItemsPanel from "@/components/main/ItemsPanel.vue";
  import axios from "axios";
  import {ref} from "vue";

  const items = ref([]);
  let page = 1;
  let has_more = true;

  let search = '';
  let order = '';

  function fetchItems(is_paginate = false) {
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
        has_more = response.data.has_more;
        if (!is_paginate) {
          items.value = response.data.products.data;
        } else {
          items.value = items.value.concat(response.data.products.data);
        }
      })
      .catch(error => {
        console.error('Ошибка при получении списка продуктов:', error);
      });
  }

  function change_search_filter(search_filter) {
    page = 1;
    search = search_filter;
    fetchItems();
  }

  function change_order_filter(order_filter) {
    page = 1;
    order = order_filter;
    fetchItems();
  }

  function paginate() {
    page += 1;
    if (has_more) {
      fetchItems(true);
    }
  }

  fetchItems();
</script>

<template>
  <div class="container">
    <div class="container-fluid-lg">
        <SearchPanel :change_search_filter="change_search_filter"/>
        <TopFilterPanel :change_order_filter="change_order_filter"/>
        <ItemsPanel :items="items" :paginate="paginate"/>
    </div>
  </div>
</template>

<style scoped>
  .container {
    padding-top: 10px;
  }
</style>
