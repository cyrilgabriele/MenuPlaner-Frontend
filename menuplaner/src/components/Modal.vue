<script setup>
const props = defineProps({
visible: {
    type: Boolean,
    required: true
},
title: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
}
})

const emit = defineEmits(['close'])

function closeModal() {
emit('close')
}
</script>

<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div class="bg-white p-4 rounded-md w-96">
        <h2 class="text-xl font-semibold mb-2 text-gray-800">{{ title }}</h2>
        <p class="text-gray-800">{{ description }}</p>
        <button class="mt-4 bg-teal-500 text-white px-2 py-1 rounded-md" @click="closeModal">Close</button>
      </div>
    </div>
</template>
  