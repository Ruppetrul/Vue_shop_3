<script>
  export default {
    name: 'App'
  }
</script>

<template>
  <div class="container">
    <div class="container-fluid-lg">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  html {
    background-color: aliceblue;
  }
  #app {
    height: 100%;
    padding-top: 10px;
    background-color: aliceblue;
  }
</style>
