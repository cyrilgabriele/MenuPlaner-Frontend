<script setup>
import { handleAcceptMenuplan } from '@/utils/apiService'
import { useUserStore } from '@/stores/userStore'

const props = defineProps({
    menuPlan: JSON,
    custom_prompt: String
})

const userStore = useUserStore()

function onAccept() {
    const person_id = userStore.person_id
    console.log("onAccept: person_id: ", person_id)
    if (!person_id) {
      console.error("person_id is not set. Please log in first.")
      return
    }
    console.log("onAccept: person_id: ", person_id)
    handleAcceptMenuplan(person_id, props.custom_prompt, props.menuPlan)
}
</script>

<template>
    <button @click="onAccept">Accept</button>
</template>
