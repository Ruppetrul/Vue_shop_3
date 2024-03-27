<script setup>
  import {defineProps, ref } from 'vue';

  const props = defineProps(['change_search_filter'])

  const timer = ref(null);
  const handleInput = (value) => {
    clearTimeout(timer.value);
    timer.value = setTimeout(() => {
      props.change_search_filter(value);
    }, 300);
  }
</script>

<template>
    <input id="search_text" name="search" type="search" class="w-100" placeholder="Что ищем?"
           @input="handleInput($event.target.value)">
</template>

<style scoped>
  #search_text {
    padding: 10px;
  }
</style>
