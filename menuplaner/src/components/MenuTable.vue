<script setup>
import AcceptButton from './AcceptButton.vue';

const props = defineProps({
  menu: {
    type: Object
  },
})

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const meals = ['Breakfast', 'Lunch', 'Dinner'];
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse">
      <thead>
        <tr class="text-lg">
          <th class="p-2"></th>
          <th class="p-2" v-for="day in days" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="meal in meals" :key="meal" class="border-t text-sm">
          <td class="p-2 font-semibold">{{ meal }}</td>
          <td v-for="day in days" :key="day" class="p-2 text-sm">
            <input 
              class="w-full p-2 text-gray-800 border border-teal-500 rounded-md text-xs"
              v-model="props.menu[day][meal].title" 
              placeholder="Add meal name" 
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <AcceptButton :menuPlan='props.menu' class="w-full bg-teal-500 p-2 rounded-md hover:bg-teal-600 focus:outline-none" />
    </div>
  </div>
</template>
