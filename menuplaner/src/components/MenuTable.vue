<script setup>
  import { reactive } from 'vue';
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const meals = ['Breakfast', 'Lunch', 'Dinner'];
  
  const menu = reactive({
    Monday: { Breakfast: '', Lunch: '', Dinner: '' },
    Tuesday: { Breakfast: '', Lunch: '', Dinner: '' },
    Wednesday: { Breakfast: '', Lunch: '', Dinner: '' },
    Thursday: { Breakfast: '', Lunch: '', Dinner: '' },
    Friday: { Breakfast: '', Lunch: '', Dinner: '' },
    Saturday: { Breakfast: '', Lunch: '', Dinner: '' },
    Sunday: { Breakfast: '', Lunch: '', Dinner: '' }
  });
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
            <input v-model="menu[day][meal]" placeholder="Add meal" />
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <style scoped>
  /* Add styles for your table here */
  </style>
  