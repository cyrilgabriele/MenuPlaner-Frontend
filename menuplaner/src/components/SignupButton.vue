<script setup>
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const handleSignUp = () => {
  userStore.loginWithRedirect({
    appState: {
      target: "/profile",
    },
    authorizationParams: {
      screen_hint: "signup",
    },
  })
}
</script>

<template>
  <button class='bg-gray-800 rounded-md px-1' @click="handleSignUp">Sign Up</button>
</template>
