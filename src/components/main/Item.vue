<script setup>
  import { defineProps } from 'vue';

  const props = defineProps(['itemData'])
</script>

<template>
  <div class="item_cart">
    <div class="item_avatar">
      <img src="https://source.unsplash.com/200x200/?avatar" alt="Дефолтная картинка" loading="lazy">
    </div>
    <div class="item_detail">
      <a>{{ props.itemData.title }}</a>
      <h5>{{ props.itemData.price }}</h5>
    </div>
    <div class="item_footer">
      <button>
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<style scoped>
  .item_cart {
    text-align: center;
    padding: 10px;
    background-color: #F8F8FF;
  }
  .item_avatar {
    height: 200px;
  }
</style>
