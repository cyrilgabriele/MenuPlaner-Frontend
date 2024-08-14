<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
import LoginButton from './LoginButton.vue';
import LogoutButton from './LogoutButton.vue';
import SignupButton from './SignupButton.vue';

const { isAuthenticated } = useAuth0();
</script>

<template>
  <nav class="bg-gray-800 p-4">
    <ul class="flex space-x-4">
      <li><router-link to="/" class="text-white hover:text-gray-300">Home</router-link></li>
      <li><router-link to="/meal-plans" class="text-white hover:text-gray-300">Weekly Menu</router-link></li>
      <li><router-link to="/profile" class="text-white hover:text-gray-300">Profile</router-link></li>
      <template v-if="!isAuthenticated">
        <li><SignupButton class="text-white hover:text-gray-300" /></li>
        <li><LoginButton class="text-white hover:text-gray-300" /></li>
      </template>
      <template v-if="isAuthenticated">
        <li><LogoutButton class="text-white hover:text-gray-300" /></li>
      </template>
    </ul>
  </nav>
</template>
