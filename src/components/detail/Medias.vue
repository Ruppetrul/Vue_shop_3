<script setup>
  import { Slide, Carousel } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'
  import { defineProps } from "vue";

  const props = defineProps(['isLoading', 'medias'])
</script>

<template>
  <div id="medias_container">
    <template v-if="props.isLoading">
      <div class="placeholder_image">
      </div>
    </template>
    <template v-else>
      <carousel :items-to-show="1">
        <slide v-for="media in props.medias" :key="media.id">
          <a><img class="media_img" :src="media.url" alt=""></a>
        </slide>
      </carousel>
    </template>
  </div>
</template>

<style scoped>
  .placeholder_image {
    width: auto;
    height: 40vh;
    animation: pulse 0.5s infinite alternate;
    background-color: #f0f0f0;
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

  @keyframes pulse {
    0% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #dcdcdc;
    }
  }
</style>