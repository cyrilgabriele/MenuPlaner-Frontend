<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
import LoginButton from './LoginButton.vue';
import LogoutButton from './LogoutButton.vue';
import SignupButton from './SignupButton.vue';

const { isAuthenticated } = useAuth0();
</script>

<template>
  <div class="w-full">
    <nav class="bg-teal-500 p-4">
      <div class="container mx-auto flex justify-center">
        <!-- Navbar Items -->
        <ul class="flex space-x-4">
          <li><router-link to="/" class="text-white hover:text-teal-300">Home</router-link></li>
          <li><router-link to="/meal-plans" class="text-white hover:text-teal-300">Weekly Menu</router-link></li>
          <li><router-link to="/profile" class="text-white hover:text-teal-300">Profile</router-link></li>
          <template v-if="!isAuthenticated">
            <li><SignupButton /></li>
            <li><LoginButton /></li>
          </template>
          <template v-if="isAuthenticated">
            <li><LogoutButton /></li>
          </template>
        </ul>
      </div>
    </nav>
  </div>
</template>
