<script setup>
import { ref } from 'vue'
import AcceptButton from './AcceptButton.vue'
import Modal from './Modal.vue'

const props = defineProps({
  menuPlan: {
    type: Object
  },
  custom_prompt: {
    type: String
  },
})

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const meals = ['Breakfast', 'Lunch', 'Dinner']

const showModal = ref(false)
const selectedMeal = ref({ title: '', description: '' })

function openModal(day, meal) {
  selectedMeal.value = props.menuPlan[day][meal]
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}
</script>

<template>
  <div v-if="menuPlan" class="overflow-x-auto">
    <table class="w-full border-collapse">
      <thead>
        <tr class="text-sm">
          <th class="p-2"></th>
          <th class="p-2" v-for="day in days" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="meal in meals" :key="meal" class="border-t text-sm">
          <td class="p-2 font-semibold">{{ meal }}</td>
          <td v-for="day in days" :key="day" class="p-2">
            <input 
              class="w-full p-2 text-gray-800 border border-teal-500 rounded-md text-xs"
              v-model="props.menuPlan[day][meal].title" 
              placeholder="Add meal name" 
              @click="openModal(day, meal)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <AcceptButton :menuPlan='props.menuPlan' :custom_prompt='props.custom_prompt' class="w-full bg-teal-500 p-2 rounded-md hover:bg-teal-600 focus:outline-none" />
  </div>
  <Modal 
    :visible="showModal" 
    :title="selectedMeal.title" 
    :description="selectedMeal.description" 
    @close="closeModal" 
  />
</template>
