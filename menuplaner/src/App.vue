<script setup>
  import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <div class="app bg-gray-800 min-h-screen text-white">
    <Navbar />
    <router-view></router-view> 
  </div>
</template>
