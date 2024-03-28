<script setup>
  import { defineProps } from "vue";

  const props = defineProps(['change_order_filter'])

  const handleChange = (event) => {
    props.change_order_filter(event.target.value);
  }
</script>

<template>
  <div id="top-filter-panel">
    <select class="custom-select" id="filterSelect" @change="handleChange">
      <option selected value="default">По умолчанию</option>
      <option value="expensive">Сначала дорогие</option>
      <option value="cheap">Сначала дешевые</option>
    </select>
  </div>
</template>

<style scoped>
  #top-filter-panel {
    margin-top: 10px;
  }
  #filterSelect {
    border-radius: 4px;
  }
</style>
