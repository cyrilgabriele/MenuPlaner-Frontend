<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect, isAuthenticated } = useAuth0();

const login = () => {
loginWithRedirect();
console.log("I am in LoginButton.vue ...")
};
</script>

<template>
    <button @click="login">Log In</button>
</template>
  