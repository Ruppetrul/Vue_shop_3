<script setup>
  import Item from './Item.vue';
  import {defineProps} from "vue";

  const props = defineProps(['items'])
</script>

<template>
  <div class="row row-cols-3" id="items_panel">
    <Item v-for="(item, index) in props.items" :key="index" :itemData="item" />
  </div>
</template>

<style scoped>
  #items_panel {
    padding: 10px;
  }
</style>
