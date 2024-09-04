<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect} = useAuth0()

const handleSignUp = async () => {
  loginWithRedirect({
    appState: {
      target: "/",
    },
    authorizationParams: {
      screen_hint: "signup",
    }
  })
}
</script>

<template>
  <button class="bg-gray-800 rounded-md px-1" @click="handleSignUp">Sign Up</button>
</template>
