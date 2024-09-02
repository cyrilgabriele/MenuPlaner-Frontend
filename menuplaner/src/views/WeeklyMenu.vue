<script setup>
import { ref, onMounted } from 'vue'
// import MenuTable from '@/components/MenuTable.vue'
import { getMenuplanWithMeals } from '@/utils/apiService'
import { useUserStore } from '@/stores/userStore'
import Modal from '@/components/Modal.vue'

const menuPlan = ref({})
const userStore = useUserStore()
const auth0_user_id = userStore.auth0_user_id
const custom_prompt = "who cares?"

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const meals = ['Breakfast', 'Lunch', 'Dinner']

async function fetchWeeklyMenuData(auth0_user_id) {
  const fetchedmenuPlan = await getMenuplanWithMeals(auth0_user_id)
  console.log("fetchWeeklyMenuData: fetchedmenuPlan: ", fetchedmenuPlan)
  menuPlan.value = fetchedmenuPlan
}

onMounted(async () => {
  await fetchWeeklyMenuData(auth0_user_id)
})

// <MenuTable :menuPlan="menuPlan" :custom_prompt="custom_prompt"/>
</script>

<template>
  <div v-if="userStore.isLoggedIn" class="overflow-x-auto">
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
              v-if="menuPlan[day] && menuPlan[day][meal]"
              class="w-full p-2 text-gray-800 border border-teal-500 rounded-md text-xs"
              v-model="menuPlan[day][meal].title" 
              placeholder="Add meal name"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="text-center py-4" v-else>
    <h1>Login to see your customized menu plan</h1>
  </div>
</template>


