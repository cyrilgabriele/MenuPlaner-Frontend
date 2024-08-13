<!-- components/LoginButton.vue -->
<template>
    <button @click="login">Log In</button>
  </template>
  
  <script setup>
  import { useAuth0 } from '@auth0/auth0-vue';
  
  const { loginWithRedirect } = useAuth0();
  
  const login = () => {
    loginWithRedirect();
  };
  </script>
  