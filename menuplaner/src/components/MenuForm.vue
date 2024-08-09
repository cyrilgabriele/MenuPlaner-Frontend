<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import AcceptButton from './AcceptButton.vue';
  import MenuTable from './MenuTable.vue';

  const menuIdeaUser = ref('')
  const LLMResponse = ref('')
  
  function handleMenuIdeaUser() {
    axios.post('http://localhost:3000/menu', { 
      title: 'MenuUser444',
      body: menuIdeaUser.value,
      userId: 444,
    })
    .then(response => {
      console.log('This is the axios response: \n', response.data);
      //LLMResponse.value = JSON.stringify(response.data ) 
      LLMResponse.value = response.data 
      console.log("LLM response in frontend: ", LLMResponse.value)
      menuIdeaUser.value = ''
    })
    .catch(error => {
      console.log("Error during fetch: ", error);
    });
  }
  </script>

<template>
    <hgroup>
      <input type="text" v-model="menuIdeaUser" placeholder="Enter meal ideas">
      <button @click="handleMenuIdeaUser">Submit Ideas</button>
    </hgroup>
    <div v-if='LLMResponse'>
      <p>Proposed Menuplan:</p>
      <MenuTable :menu='LLMResponse'/>
    </div>
    <AcceptButton :menuPlan='LLMResponse'/>
  </template>
  