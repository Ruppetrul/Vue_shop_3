<script>
  export default {
    name: 'App'
  }
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="container-fluid-lg">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
  #app {
    height: 100%;
    padding-top: 10px;
    background-color: aliceblue;
  }
</style>
