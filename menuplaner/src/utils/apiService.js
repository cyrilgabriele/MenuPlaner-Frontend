import axios from 'axios'

export async function generateMenuplan(menuIdeaUser) {
  console.log("generateMenuplan: menuIdeaUser: ", menuIdeaUser.value)
  try {
    const response = await axios.post('http://localhost:3000/menuplan/generateMenuplan', { 
      custom_prompt: menuIdeaUser.value
    })
    console.log('generateMenuplan: response: \n', response.data)
    return response.data 
  } catch (error) {
    console.error("in generateMenuplan: Error during fetch: ", error)
    return null
  }
}

export function handleAcceptMenuplan(auth0_user_id, custom_prompt, menuPlan) {
  console.log("auth0_user_id: ", auth0_user_id)
  console.log("handleAcceptMenu: custom_prompt: ", custom_prompt)
  console.log("handleAcceptMenu: menuPlan: ", menuPlan)
  axios.post('http://localhost:3000/menuplan/saveMenuplan', {
    auth0_user_id: auth0_user_id,
    custom_prompt: custom_prompt, // here no .value as it is a prop now not
    meals: menuPlan,
  })
  .then(response => {
      console.log('Response AcceptButton: \n', response.data)
  })
  .catch(error => {
      console.log("in handleAcceptMenuplan: Error during fetch: ", error)
  })
}

export function getMenuplan(auth0_user_id) {
  axios.post('http://localhost:3000/menuplan/getMenuplan', {
    auth0_user_id: auth0_user_id
  })
  .then(response => {
    console.log('Response getMenuplan: \n', response.data)
  })
  .catch(error => {
    console.log("in getMenuplan: Error during fetch: ", error)
})
}

export async function getMenuplanWithMeals(auth0_user_id) {
  console.log("getMenuplanWithMeals: auth0_user_id: ", auth0_user_id)
  try {
    const response = await axios.post('http://localhost:3000/menuplan/getMenuplanWithMeals', {
      auth0_user_id: auth0_user_id
    })
    console.log('Response getMenuplan: \n', response.data)
    return response.data // Return the data so it can be accessed in your component
  } catch (error) {
    console.error("in getMenuplan: Error during fetch: ", error)
    return null // Handle the error by returning null or throwing an error if preferred
  }
}
