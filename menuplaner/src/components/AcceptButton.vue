<script setup>
import axios from 'axios';
import { handleAcceptMenu } from '@/utils/apiService';

const props = defineProps({
    menuPlan: JSON
})

function onAccept() {
    handleAcceptMenu(props.menuPlan)
}

</script>

<template>
    <button @click="onAccept">Accept</button>
</template>
