<script setup>
console.log("Hello from NavBar.vue")
</script>

<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/meal-plans">Meal Plans</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </nav>
</template>
  
  <style scoped>
  /* Add styles for your navigation bar here */
  </style>
  