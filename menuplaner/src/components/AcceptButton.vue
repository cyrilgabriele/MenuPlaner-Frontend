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

  if (!userStore.person_id) {
    console.error("User ID is not available.")
    return
  }

  console.log("onAccept: person_id: ", userStore.person_id)
  handleAcceptMenuplan(userStore.person_id, props.custom_prompt, props.menuPlan)
}
</script>

<template>
  <button @click="onAccept">Accept</button>
</template>
