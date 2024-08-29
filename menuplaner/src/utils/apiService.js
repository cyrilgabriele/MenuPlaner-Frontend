import axios from 'axios'

export function generateMenuplan(menuIdeaUser, LLMResponse) {
  axios.post('http://localhost:3000/menuplan/generateMenuplan', { 
    custom_prompt: menuIdeaUser
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


export function handleAcceptMenuplan(custom_prompt, menuPlan) {
  console.log("handleAcceptMenu: custom_prompt: ", custom_prompt)
  console.log("handleAcceptMenu: menuPlan: ", menuPlan)
  axios.post('http://localhost:3000/menuplan/saveMenuplan', {
    // TODO: manage to get this states dynamically  
    person_id: 1,
    custom_prompt: custom_prompt,
    meals: menuPlan,
  })
  .then(response => {
      console.log('Response AcceptButton: \n', response.data)
  })
  .catch(error => {
      console.log("Error during fetch: ", error)
  })
}