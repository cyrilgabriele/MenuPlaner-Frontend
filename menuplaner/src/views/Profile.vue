<script setup>
import { onMounted, ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import VegetarianSwitch from '@/components/VegetarianSwitch.vue';
import { fetchAuth0 } from '@/utils/fetchAuth0';

const { user, isAuthenticated, isLoading } = useAuth0();
const userInfo = ref(null)

onMounted(() => 
  userInfo.value = fetchAuth0(isAuthenticated)
)

console.log("Hello from Profile.vue")
console.log("userInfo.value:", userInfo)
console.log("user = ", user)


</script>

<template>
  <div>
    <h1>Profile</h1>
    <p>This is your profile page.</p>
    <VegetarianSwitch/>
    <div v-if="isAuthenticated">
      <p>is authenticated</p>
    </div>
  </div>
</template>