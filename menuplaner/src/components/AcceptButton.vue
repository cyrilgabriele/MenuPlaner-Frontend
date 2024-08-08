<script setup>
import axios from 'axios';
import { defineProps } from 'vue'
const props = defineProps({
    menuPlan: String
})

function handleAcceptMenu() {
    alert("Button clicked")
    console.log("In handleAcceptMenu")
    console.log("props.menuPlan: ", props.menuPlan)
    axios.post('http://localhost3000/saveMenu', {
        title: 'Title',
        body: props.menuPlan,
        userId: 444,
    })
    .then(response => {
        console.log('Response AcceptButton: \n', response.data);
    })
    .catch(error => {
        console.log("Error during fetch: ", error);
    })
}

defineExpose({
    handleAcceptMenu
})
</script>

<template>
    <button @click="handleAcceptMenu">Accept</button>
</template>
