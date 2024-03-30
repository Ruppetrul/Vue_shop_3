<script setup>
  import { defineProps, watch } from "vue";
  import { updateCount } from "@/api/updateCount.js";

  const props = defineProps(['isLoading', 'item']);

  const decreaseCount = () => {
    props.item.quantity_in_cart--;
  };

  const increaseCount = () => {
    props.item.quantity_in_cart++;
  };

  let timer = null;

  watch(() => props.item.quantity_in_cart, (newValue) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      updateCount(props.item.id, newValue);
    }, 300);
  });

</script>

<template>
  <div>
    <template v-if="props.isLoading">
      <div class="placeholder_text"></div>
      <br>
      <div class="placeholder_text w-50"></div>
      <br>
      <hr>
      <div class="placeholder_quantity_panel w-50"></div>
    </template>
    <template v-else>
      <h1>{{ props.item.title }}</h1>
      <h4>{{ props.item.price }}</h4>
      <hr>
      <template v-if="item.quantity_in_cart">
        <div class="item_quantity_control_panel">
          <button @click="decreaseCount">-</button>
          <span class="quantity_panel" style="width: 40%;">{{ props.item.quantity_in_cart }}</span>
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
</template>

<style>
  .quantity_panel {
    padding-right: 20px;
    padding-left: 20px;
  }

  .placeholder_text, .placeholder_quantity_panel {
    background-color: #f0f0f0;
    animation: pulse 0.5s infinite alternate;
  }

  .placeholder_text {
    height: 1em;
  }

  .placeholder_quantity_panel {
    height: 50px;
   }

  .item_quantity_control_panel button {
    border: none;
    border-radius: 6px;
    background-color: aliceblue;
    width: 30%;
    max-width: 40px;
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