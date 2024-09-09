<script setup>
  import { ref } from 'vue'
  import MenuTable from './MenuTable.vue'
  import { generateMenuplan } from '@/utils/apiService'
  import AcceptButton from './AcceptButton.vue'
  import { useUserStore } from '@/stores/userStore'
  import LoginButton from './LoginButton.vue'
  import SignupButton from './SignupButton.vue'

  const menuIdeaUser = ref('')
  const menuPlan = ref('')
  const showLoading = ref(false)
  const userStore = useUserStore()

  async function submitMenuIdea() {
    console.log("submitMenuIdea: menuIdeaUser.value: ", menuIdeaUser.value)
    showLoading.value = true
    try {
      menuPlan.value = await generateMenuplan(menuIdeaUser)
    } catch (error) {
      console.error('Error generating menu plan:', error)
    } finally {
      showLoading.value = false 
    }
  }
</script>


<template>
  <div class="container mx-auto">
    <p class="py-2">Enter your menu plan ideas in the field below. These ideas will be used to generate a customized menu plan using a language model. 
      Simply input your thoughts, and watch as your personalized menu comes to life!<br>
      E.g.: 'Create a high-protein menu plan' or 'Plan a week's meals with vegetarian options'</p>
    <hgroup>
      <input 
        type="text" 
        v-model="menuIdeaUser" 
        placeholder="Enter your ideas!"
        class="w-full p-2 focus:outline-none rounded-md text-gray-800"
      />
      <button 
        @click="submitMenuIdea"
        class="mt-2 w-full bg-teal-500 p-2 rounded-md hover:bg-teal-600 focus:outline-none"
      >
        Submit Ideas
      </button>
    </hgroup>
    <div v-if="showLoading" class="text-center my-4">
      <p>Loading your personalized menu plan, please wait...</p>
    </div>

    <div v-if='menuPlan'>
      <MenuTable :menuPlan='menuPlan' :custom_prompt='menuIdeaUser'/>
      <AcceptButton v-if="userStore.isLoggedIn" :menuPlan='menuPlan' :custom_prompt='menuIdeaUser' class="w-full bg-teal-500 p-2 rounded-md hover:bg-teal-600 focus:outline-none" />
      <div v-else>
        <h1 class="text-center px-4">Please log in or sign up to save your personalized menu plan!</h1>
        <SignupButton class="mt-2 w-full bg-teal-500 p-2 rounded-md hover:bg-teal-600 focus:outline-none"/>
        <LoginButton class="mt-2 w-full bg-teal-500 p-2 rounded-md hover:bg-teal-600 focus:outline-none"/>
      </div>
    </div>
  </div>
</template>


  