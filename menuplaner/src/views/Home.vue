<script setup>
  import MenuForm from "../components/MenuForm.vue"
  import LoginButton from "@/components/LoginButton.vue"
  import LogoutButton from "@/components/LogoutButton.vue";
  console.log("Hello form Home")
</script>

<template>
    <div>
      <LoginButton />
      <LogoutButton />
      <h1>Home Page</h1>
      <h2>Welcome to the Home Page!</h2>
      <p>Enter your Menuplan ideas:</p>
      <MenuForm />
    </div>
</template>
  