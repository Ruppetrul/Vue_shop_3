<script setup>
  import { getItem } from '@/api/getItem.js';
  import { ref, watch } from "vue";
  import { updateCount } from "@/api/updateCount.js";
  import { Slide, Carousel } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import { useRoute } from 'vue-router';

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
      <div id="medias_container">
        <template v-if="isLoading">
          <div class="placeholder_image">
          </div>
        </template>
        <template v-else>
          <carousel :items-to-show="1">
            <slide v-for="media in medias" :key="media.id">
              <a><img class="media_img" :src="media.url" alt=""></a>
            </slide>
          </carousel>
        </template>
      </div>
      <br>
    </div>
    <div class="col-12 col-xl-6 info_panel">
      <div class="">
        <template v-if="isLoading">
          <div class="placeholder_text"></div>
          <br>
          <div class="placeholder_text w-50"></div>
          <br>
          <hr>
          <div class="placeholder_quantity_panel w-50"></div>
        </template>
        <template v-else>
          <h1>{{ item.title }}</h1>
          <h4>{{ item.price }}</h4>
          <hr>
          <template v-if="item.quantity_in_cart">
            <div class="item_quantity_control_panel">
              <button @click="decreaseCount">-</button>
              <span class="quantity_panel" style="width: 40%;">{{ item.quantity_in_cart }}</span>
              <button @click="increaseCount">+</button>
            </div>
          </template>
          <template v-else>
            <div class="item_quantity_default_panel">
              <button @click="increaseCount">Добавить в корзину</button>
            </div>
          </template>
        </template>
      </div>
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

#medias_container {
  text-align: center;
  width: 100%;
  height: 45vh;
}

.media_img {
  width: auto;
  height: 40vh;
  object-fit: cover;
}

@media (min-width: 768px) {
  .medias_panel {
    text-align: right;
  }

  .info_panel {
    text-align: left;
  }
}

.item_quantity_control_panel button {
  border: none;
  border-radius: 6px;
  background-color: aliceblue;
  width: 30%;
  max-width: 40px;
}

.quantity_panel {
  padding-right: 20px;
  padding-left: 20px;
}

.placeholder_text, .placeholder_image, .placeholder_quantity_panel {
  background-color: #f0f0f0;
}

.placeholder_text {
  height: 1em;
  animation: pulse 0.5s infinite alternate;
}

.placeholder_image {
  width: auto;
  height: 40vh;
  animation: pulse 0.5s infinite alternate;
}

.placeholder_quantity_panel {
  height: 50px;
  animation: pulse 0.5s infinite alternate;
}

@keyframes pulse {
  0% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #dcdcdc;
  }
}
</style>
