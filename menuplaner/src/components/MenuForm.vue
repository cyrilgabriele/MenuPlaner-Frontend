<script setup>
  import { ref } from 'vue'
  import MenuTable from './MenuTable.vue'
  import { generateMenuplan } from '@/utils/apiService'

  const menuIdeaUser = ref('')
  const LLMResponse = ref('')
  
  async function submitMenuIdea() {
    console.log("submitMenuIdea: menuIdeaUser.value: ", menuIdeaUser.value)
    LLMResponse.value = await generateMenuplan(menuIdeaUser)
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
        @click="submitMenuIdea"
        class="mt-2 w-full bg-teal-500 p-2 rounded-md hover:bg-teal-600 focus:outline-none"
      >
        Submit Ideas
      </button>
    </hgroup>

    <div v-if='LLMResponse'><MenuTable :menuPlan='LLMResponse' :custom_prompt='menuIdeaUser'/></div>
  </div>
</template>


  