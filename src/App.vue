<script setup>
  import SearchPanel from "@/components/main/SearchPanel.vue";
  import ItemsPanel from "@/components/main/ItemsPanel.vue";
</script>

<template>
  <div class="container">
    <div class="container-fluid-lg">
        <SearchPanel />
        <ItemsPanel />
    </div>
  </div>
</template>

<style scoped>
  .container {
    padding-top: 10px;
  }
</style>
