<script setup>
  import Item from './Item.vue';
  import {defineProps, onMounted, watch, ref} from "vue";

  const props = defineProps(['items', 'paginate'])

  const bottomOfPage = ref(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    bottomOfPage.value = scrollTop + clientHeight >= scrollHeight - 50;
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  watch(bottomOfPage, (newValue) => {
    if (newValue) {
      props.paginate();
    }
  });
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
