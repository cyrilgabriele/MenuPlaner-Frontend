<script setup>
import axios from 'axios';

const props = defineProps({
    menuPlan: JSON
})

function handleAcceptMenu() {
    console.log("props.menuPlan: ", props.menuPlan)
    axios.post('http://localhost:3000/saveMenu', {
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
