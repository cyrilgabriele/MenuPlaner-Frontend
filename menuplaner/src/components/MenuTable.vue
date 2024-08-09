<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    menu: {
      type: JSON
    }
  })
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const meals = ['Breakfast', 'Lunch', 'Dinner'];
  
  const menu = ref(props.menu);
</script>

<template>
    <table>
      <thead>
        <tr>
          <th></th>
          <th v-for="day in days" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="meal in meals" :key="meal">
          <td>{{ meal }}</td>
          <td v-for="day in days" :key="day">
            <input v-model="props.menu[day][meal]" placeholder="Add meal" />
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <style scoped>
  /* Add styles for your table here */
  </style>
  