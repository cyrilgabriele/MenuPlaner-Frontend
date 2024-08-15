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
    <hgroup>
      <input 
        type="text" 
        v-model="menuIdeaUser" 
        placeholder="Enter meal ideas"
        class="w-full p-2  rounded-md text-gray-800 focus:ring-teal-500"
      />
      <button 
        @click="handleMenuIdeaUser"
        class="mt-2 w-full bg-teal-500 p-2 rounded-md hover:bg-teal-600 focus:outline-none"
      >
        Submit Ideas
      </button>
    </hgroup>

    <div v-if='LLMResponse' class="">
      <p class="text-white font-semibold mb-2">Proposed Menuplan:</p>
      <MenuTable :menu='LLMResponse' class="w-full" />
    </div>

    <div v-if='LLMResponse' class="mt-4">
      <AcceptButton :menuPlan='LLMResponse' class="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500" />
    </div>
  </div>
</template>


  