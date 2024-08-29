<script setup>
import { handleAcceptMenuplan } from '@/utils/apiService'

const props = defineProps({
    menuPlan: JSON,
    custom_prompt: String
})

function onAccept() {
    handleAcceptMenuplan(props.custom_prompt, props.menuPlan)
}

</script>

<template>
    <button @click="onAccept">Accept</button>
</template>
