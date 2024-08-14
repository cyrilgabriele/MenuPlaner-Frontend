<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect, isAuthenticated } = useAuth0();

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: "/profile",
    },
  });
};
</script>

<template>
    <button @click="handleLogin">Log In</button>
</template>
  