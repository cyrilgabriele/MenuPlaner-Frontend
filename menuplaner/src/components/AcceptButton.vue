<script setup>
import { handleAcceptMenuplan } from '@/utils/apiService';
import { useUserStore } from '@/stores/userStore';
import { computed } from 'vue';

const props = defineProps({
  menuPlan: JSON,
  custom_prompt: String,
});

const userStore = useUserStore();

// Use computed properties to keep reactivity
const person_id = computed(() => userStore.person_id);
const isLoggedIn = computed(() => userStore.isLoggedIn);

function onAccept() {
  if (!isLoggedIn.value) {
    console.error("User is not logged in. Please log in first.");
    return;
  }

  if (!person_id.value) {
    console.error("User ID is not available.");
    return;
  }

  console.log("onAccept: person_id: ", person_id.value);
  handleAcceptMenuplan(person_id.value, props.custom_prompt, props.menuPlan);
}
</script>

<template>
  <button @click="onAccept">Accept</button>
</template>
