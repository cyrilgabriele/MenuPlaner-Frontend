<script setup>
import { handleAcceptMenuplan } from '@/utils/apiService'
import { useUserStore } from '@/stores/userStore'

const props = defineProps({
  menuPlan: JSON,
  custom_prompt: String,
})

const userStore = useUserStore()

function onAccept() {
  console.log('UserStore State:', userStore)

  if (!userStore.isLoggedIn) {
    console.error("User is not logged in. Please log in first.")
    return
  }

  if (!userStore.auth0_user_id) {
    console.error("User ID is not available.")
    return
  }

  console.log("onAccept: auth0_user_id: ", userStore.auth0_user_id)
  handleAcceptMenuplan(userStore.auth0_user_id, props.custom_prompt, props.menuPlan)
}
</script>

<template>
  <button @click="onAccept">Accept</button>
</template>
