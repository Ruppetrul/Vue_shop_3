<script setup>
  import Item from './Item.vue';
  import { defineProps, onMounted, watch, ref } from "vue";

  const props = defineProps(['items', 'paginate', 'has_more'])

  const bottomOfPage = ref(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    bottomOfPage.value = scrollTop + clientHeight >= scrollHeight - 50;
  }

  const isScreenFilledWithCards = () => {
    const clientHeight = document.documentElement.clientHeight;
    const cardContainerHeight = document.getElementById('items_panel').offsetHeight;
    return cardContainerHeight >= clientHeight;
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);

    const fetchDataIfNeeded = async () => {
      props.paginate();
      setTimeout(() => {
        if (!isScreenFilledWithCards() && props.has_more) {
          fetchDataIfNeeded();
      }}, 1000);
    };

    fetchDataIfNeeded();
  });

  watch(bottomOfPage, (newValue) => {
    if (newValue) {
      props.paginate();
    }
  });
</script>

<template>
  <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5" id="items_panel">
    <Item v-for="(item, index) in props.items" :key="index" :itemData="item" />
  </div>
</template>

<style scoped>
  #items_panel {
    padding: 10px;
  }
</style>
