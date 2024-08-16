<script setup>
import { onMounted, ref } from 'vue';
import VegetarianSwitch from '@/components/VegetarianSwitch.vue';
import { processAuth0User } from '@/utils/fetchAuth0';

const userInfo = ref(null)
const authenticationStatus = ref(false)

onMounted(() => {
  processAuth0User(authenticationStatus, userInfo);
})

function handleClick() {
  console.log("userInfo.value: ", userInfo.value)
  console.log("authenticationStatus.value: ", authenticationStatus.value)
}
</script>

<template>
  <div>
    <h1>Profile</h1>
    <p>This is your profile page.</p>
    <VegetarianSwitch/>
    <button @click="handleClick">CLick</button>
    <div v-if="authenticationStatus">
      <p>is authenticated</p>
    </div>
  </div>
</template>