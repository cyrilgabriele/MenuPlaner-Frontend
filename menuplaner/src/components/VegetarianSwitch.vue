<script setup>
import { ref } from 'vue';
const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const isVegetarian = ref(props.modelValue);

const onToggle = () => {
    //TODO check this... 
  emit('update:modelValue', isVegetarian.value);
};
</script>

<template>
    <div>
        <input type="checkbox" v-model="isVegetarian" @change="onToggle">
        <label>Vegetarian</label>
    </div>
    <div>
        <input type="text" placeholder="Tell me about an intolerance ">
    </div>
    
</template>
