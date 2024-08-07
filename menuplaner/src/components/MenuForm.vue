<template>
    <hgroup>
      <input type="text" v-model="menuIdeaUser" placeholder="Enter meal ideas">
      <button @click="handleMenuIdeaUser">Submit Ideas</button>
    </hgroup>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const menuIdeaUser = ref('');
  
  function handleMenuIdeaUser() {
    //axios.post('https://jsonplaceholder.typicode.com/posts', {
    axios.post('https://localhost:3000/menu', { //NOT WORKING!!!
      title: 'MenuUser444',
      body: menuIdeaUser.value,
      userId: 444,
    })
    .then(response => {
      console.log('This is the axios response: \n', response.data);
      menuIdeaUser.value = '';
    })
    .catch(error => {
      console.log("Error during fetch: ", error);
    });
  }
  </script>
  
  <style scoped>
  /* Add styles for your form here */
  </style>
  