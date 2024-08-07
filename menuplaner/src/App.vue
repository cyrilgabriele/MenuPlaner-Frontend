<template>
  <div class="menu-plan">
    <h1>Weekly Menu</h1>
    <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/meal-plans">Meal Plans</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </nav>
    <router-view></router-view> <!-- This is where your routed components will be displayed -->
  </div>
    <hgroup>
      <input type='text' v-model="menuIdeaUser" placeholder="Enter meal ideas">
      <button @click="handleMenuIdeaUser">Submit Ideas</button>
    </hgroup>
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
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios'
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

const menuIdeaUser = ref('') 

function handleMenuIdeaUser() {
  axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'MenuUser444',
    body: menuIdeaUser.value,
    userId: 444,
  })
  .then(function (response) {
    console.log('This is the axios response: \n', response.data)
    console.log('Bla: ', menu['Monday'])
    menu['Monday']['Breakfast'] = insertMenuPlan()
  })
  .catch(function (error) {
    console.log("Error during fetch: ", error)
  })
  
  console.log("Menu Idea User: ", menuIdeaUser.value) 
  console.log("This is a test for the menu variable: ", menu.value)
  
  menuIdeaUser.value = ''
}

function insertMenuPlan () {
  //TODO: handle here the response of the (LLM) API to get the 
  return 'blub'
}
</script>
