<template>
  <div class="menu-plan">
    <h1>Weekly Menu</h1>
    <NavBar />
    <router-view></router-view> <!-- For displaying routed views -->
    <MenuForm />
    <MenuTable />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import MenuForm from './components/MenuForm.vue';
import MenuTable from './components/MenuTable.vue';
</script>

<style scoped>
/* Add global styles here */
</style>
