<script setup>
  import { reactive } from 'vue';
  //TODO: use here the MenuTable component
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
    <div class="menu-plan">
      <h1>Weekly Menu</h1>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="day in days" :key="day">
            <td>{{ day }}</td>
            <td v-for="meal in ['Breakfast', 'Lunch', 'Dinner']" :key="meal">
              <input v-model="menu[day][meal]" placeholder="Add meal" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<style scoped>
</style>
