import axios from 'axios'

export function generateMenuplan(menuIdeaUser, LLMResponse) {
  console.log("generateMenuplan: menuIdeaUser: ", menuIdeaUser.value)
  axios.post('http://localhost:3000/menuplan/generateMenuplan', { 
    custom_prompt: menuIdeaUser.value
  })
  .then(response => {
    // console.log('This is the axios response: \n', response.data)
    LLMResponse.value = response.data
    // console.log("LLM response in frontend: ", LLMResponse.value)
  })
  .catch(error => {
    console.log("Error during fetch: ", error)
  })
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