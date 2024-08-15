<script setup>
  const props = defineProps({
    menu: {
      type: JSON
    }
  })
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const meals = ['Breakfast', 'Lunch', 'Dinner'];
</script>

<template>
  <div class=" overflow-x-auto">
    <table class="w-full border-collapse">
      <thead>
        <tr class="text-lg">
          <th class="p-2"></th>
          <th class="p-2" v-for="day in days" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="meal in meals" :key="meal" class="border-t text-lg">
          <td class="p-2 font-semibold">{{ meal }}</td>
          <td v-for="day in days" :key="day" class="p-2 text-sm">
            <input 
              class="w-full p-2 text-gray-800 border border-teal-500 rounded-md"
              v-model="props.menu[day][meal]" 
              placeholder="Add meal" 
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

