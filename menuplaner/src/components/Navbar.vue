<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
import LoginButton from './LoginButton.vue';
import LogoutButton from './LogoutButton.vue';
import SignupButton from './SignupButton.vue';

const { isAuthenticated } = useAuth0();
console.log("Hello from NavBar.vue")
</script>

<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/meal-plans">Weekly Menu</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <template v-if="!isAuthenticated">
          <SignupButton />
          <LoginButton />
        </template>
        <template v-if="isAuthenticated">
          <LogoutButton />
        </template>
      </ul>
    </nav>
</template>
  