<script setup>
import { useUserStore } from '@/stores/userStore'
import VegetarianSwitch from '@/components/VegetarianSwitch.vue'

const userstore = useUserStore()
const nickname = userstore.nickname

</script>

<template>
  <div class="">
    <h1 class="text-h1">Profile</h1>
    <div v-if="userstore.isLoggedIn">
      <h2 class="text-h2 mx-auto">Hi, {{ nickname }}</h2>
      <div class="text-center">
        <VegetarianSwitch/>
        <button @click="handleClick">CLick</button>
      </div>
    </div>
    <div class="overflow-x-auto text-center" v-else>
      <h2 class="text-h2 py-4">Please login first</h2>
    </div>
  </div>
</template>