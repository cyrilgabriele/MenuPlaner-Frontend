<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect } = useAuth0()

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: "/profile",
    },
  })
}
</script>

<template>
  <button class="bg-gray-800 rounded-md px-1" @click="handleLogin">Log In</button>
</template>
