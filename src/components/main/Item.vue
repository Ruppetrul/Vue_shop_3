<script setup>
  import { defineProps, watch } from 'vue';
  import { updateCount } from '@/api/updateCount.js';

  const props = defineProps(['itemData'])

  let timer = null;

  const decreaseCount = () => {
    props.itemData.quantity_in_cart--;
  };

  const increaseCount = () => {
    props.itemData.quantity_in_cart++;
  };

  watch(() => props.itemData.quantity_in_cart, (newValue) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('updateCount');
       updateCount(props.itemData.id, newValue);
    }, 300);
  });
</script>

<template>
  <div class="item_cart_container">
    <div class="item_cart">
      <div class="item_avatar">
        <router-link :to="`/detail/${props.itemData.id}`">
          <img :src="props.itemData.avatar_url" width="200" height="200" alt="Дефолтная картинка" loading="lazy">
        </router-link>
      </div>
      <div class="item_detail">
        <router-link :to="'/detail/' + props.itemData.id">{{ props.itemData.title }}</router-link>
        <h5>{{ props.itemData.price }}</h5>
      </div>
      <div class="item_footer">
        <template v-if="props.itemData.quantity_in_cart">
          <div class="item_quantity_control_panel">
            <button @click="decreaseCount">-</button>
            <span style="width: 40%;">{{ props.itemData.quantity_in_cart }}</span>
            <button @click="increaseCount">+</button>
          </div>
        </template>
        <template v-else>
          <div class="item_quantity_default_panel">
            <button @click="increaseCount">Добавить в корзину</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .item_cart_container {
    background-color: aliceblue;
    padding: 5px;
  }

  .item_cart {
    background-color: white;
    height: 100%;
    padding: 10%;
    border-radius: 7%;
    display: flex;
    flex-direction: column;
  }

  .item_avatar {
    text-align: center;
  }

  .item_avatar img {
    width: 100%;
    height: auto;
    border-radius: 7%;
  }

  .item_footer {
    text-align: center;
  }

  .item_detail {
    margin-top: auto;
  }

  .item_footer button {
    border: none;
    border-radius: 6px;
    background-color: aliceblue;
    width: 100%;
  }

  .item_quantity_control_panel {
    display: flex;
    justify-content: space-between;
  }

  .item_quantity_control_panel button {
    width: 30%;
  }
</style>
