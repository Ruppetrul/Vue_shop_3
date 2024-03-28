<script setup>
  import SearchPanel from "@/components/main/SearchPanel.vue";
  import TopFilterPanel from "@/components/main/TopFilterPanel.vue";
  import ItemsPanel from "@/components/main/ItemsPanel.vue";
  import { ref } from "vue";
  import { getItems } from '@/api/getItems.js';

  const items = ref([]);
  let page = 0;
  let has_more = true;

  let search = '';
  let order = '';

  async function fetchItems(is_paginate = false) {
    const params = new URLSearchParams(
      {
        only_data: 1,
        page: page,
        search: search,
        priority_filter: order
      }
    );

    await getItems(params, is_paginate, items, setHasMore);
  }

  function setHasMore(value) {
    has_more = value;
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

  async function paginate() {
    page += 1;
    if (has_more) {
      await fetchItems(true);
    }
  }

</script>

<template>
  <div id="page">
    <SearchPanel :change_search_filter="change_search_filter"/>
    <TopFilterPanel :change_order_filter="change_order_filter"/>
    <ItemsPanel :items="items" :paginate="paginate" :has_more="has_more"/>
  </div>
</template>

<style scoped>
</style>
