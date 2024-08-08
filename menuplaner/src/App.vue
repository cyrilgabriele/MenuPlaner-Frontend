<script setup>
  import NavBar from './components/NavBar.vue';
  import MenuForm from './components/MenuForm.vue';
  import MenuTable from './components/MenuTable.vue';
</script>

<template>
  <div class="app">
    <h1>Weekly Menu</h1>
    <NavBar />
    <router-view></router-view> 
  </div>
</template>

<style scoped>
/* Add global styles here */
</style>
