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
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    setup() {
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
  
      return {
        days,
        menu
      };
    }
  }
  </script>
  
  <style scoped>
  .menu-plan {
    max-width: 600px;
    margin: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #f4f4f4;
  }
  </style>
  