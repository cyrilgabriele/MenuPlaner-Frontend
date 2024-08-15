<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import AcceptButton from './AcceptButton.vue';
  import MenuTable from './MenuTable.vue';
  //import { handleMenuIdeaUser } from '@/utils/fetchLLMResponse';

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
  <div class="container mx-auto">
    <p class="py-2">Enter your menu plan ideas in the field below. These ideas will be used to generate a customized menu plan using a language model. 
      Simply input your thoughts, and watch as your personalized menu comes to life!</p>
    <hgroup>
      <input 
        type="text" 
        v-model="menuIdeaUser" 
        placeholder="Enter meal ideas"
        class="w-full p-2 focus:outline-none rounded-md text-gray-800"
      />
      <button 
        @click="handleMenuIdeaUser"
        class="mt-2 w-full bg-teal-500 p-2 rounded-md hover:bg-teal-600 focus:outline-none"
      >
        Submit Ideas
      </button>
    </hgroup>

    <div v-if='LLMResponse'>
      <MenuTable :menu='LLMResponse'/>
    </div>

    <div v-if='LLMResponse' class="mt-4">
      <AcceptButton :menuPlan='LLMResponse' class="w-full bg-teal-500 p-2 rounded-md hover:bg-teal-600 focus:outline-none" />
    </div>
  </div>
</template>


  