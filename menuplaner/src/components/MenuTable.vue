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
  <div class="container mx-auto p-4">
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="hidden md:block overflow-x-auto">
        <table class="min-w-full">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="px-4 py-2"></th>
              <th v-for="day in days" :key="day" class="px-4 py-2 text-left">{{ day }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="meal in meals" :key="meal" class="border-t">
              <td class="px-4 py-2 bg-gray-100 font-semibold">{{ meal }}</td>
              <td v-for="day in days" :key="day" class="px-4 py-2">
                <input 
                  v-model="props.menu[day][meal]" 
                  placeholder="Add meal"
                  class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- Mobile View -->
      <div class="md:hidden">
        <div v-for="meal in meals" :key="meal" class="border-t">
          <div class="bg-gray-100 p-2 font-semibold">{{ meal }}</div>
          <div v-for="day in days" :key="day" class="flex items-center justify-between p-2 border-b">
            <span class="text-gray-600">{{ day }}</span>
            <input 
              v-model="props.menu[day][meal]" 
              placeholder="Add meal"
              class="w-full ml-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  