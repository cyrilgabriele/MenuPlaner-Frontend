<script setup>
import { useAuth0 } from '@auth0/auth0-vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()


const handleLogin = () => {
  userStore.loginWithRedirect({
    appState: {
      target: "/profile",
    },
  });
};
</script>

<template>
    <button class='bg-gray-800 rounded-md px-1' @click="handleLogin">Log In</button>
</template>
  