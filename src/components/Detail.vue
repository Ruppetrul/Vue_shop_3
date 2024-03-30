<script setup>
  import { getItem } from '@/api/getItem.js';
  import { ref, watch } from "vue";
  import { useRoute } from 'vue-router';

  import Medias from "@/components/detail/Medias.vue";
  import InfoPanel from "@/components/detail/InfoPanel.vue";

  const item = ref([]);
  const medias = ref([]);
  const isLoading = ref(true);

  (async () => {
    try {
      const route = useRoute();
      item.value = await getItem(route.params.item_id);
      medias.value = item.value.medias;
      isLoading.value = false;
    } catch (error) {
      console.error(error);
    }
  })();
</script>

<template>
  <div class="row">
    <div class="col-12 col-xl-6 medias_panel">
      <Medias :isLoading="isLoading" :medias="medias"/>
      <br>
    </div>
    <div class="col-12 col-xl-6 info_panel">
      <InfoPanel :isLoading="isLoading" :item="item"/>
    </div>
  </div>
</template>

<style scoped>
  .row {
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    min-height: 50vh;
  }

  .medias_panel {
    text-align: center;
  }

  @media (min-width: 768px) {
    .medias_panel {
      text-align: right;
    }

    .info_panel {
      text-align: left;
    }
  }
</style>
