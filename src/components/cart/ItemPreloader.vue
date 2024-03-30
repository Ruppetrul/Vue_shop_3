<script setup>
</script>

<template>
  <div class="cart_item">
    <div class="container">
      <div class="row">
        <div class="preloader_avatar col-2">

        </div>
        <div class="col">
          <div class="preloader_title"></div>
          <div class="preloader_price"></div>
        </div>
      </div>

      </div>
    </div>
</template>

<style scoped>
.preloader_avatar, .preloader_title, .preloader_price {
  background-color: #f0f0f0;
  height: 1em;
  animation: pulse 0.5s infinite alternate;
  border-radius: 5px;
}

.preloader_avatar {
  width: 10vw;
  height: 10vw;
  min-height: 4em;
  min-width: 4em;
}

.preloader_title {
  width: 30vw;
}

.preloader_price {
  margin-top: 10px;
  width: 10vw;
}

.cart_item {
  margin-top: 10px;
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
