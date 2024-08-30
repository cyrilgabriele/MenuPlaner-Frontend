<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { logout } = useAuth0();

const handleLogout = () => {
  logout({ logoutParams: { returnTo: window.location.origin } });
};
</script>

<template>
  <button class="bg-gray-800 rounded-md px-1" @click="handleLogout">Log Out</button>
</template>
