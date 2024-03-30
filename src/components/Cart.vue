<script setup>
  import { ref } from "vue";
  import ItemPreloader from "@/components/cart/ItemPreloader.vue";
  const isLoading = ref(true);
</script>

<template>
  <h1>Корзина</h1>
  <hr>
  <template v-if="isLoading">
    <div class="placeholder_image">
      <ItemPreloader v-for="index in 10" :key="index" />
    </div>
  </template>
  <template v-else>

  </template>
</template>

<style scoped>
</style>
