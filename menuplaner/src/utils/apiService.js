import axios from 'axios'

export function generateMenuplan(menuIdeaUser, LLMResponse) {
  // console.log("generateMenuplan: menuIdeaUser: ", menuIdeaUser.value)
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


export function handleAcceptMenuplan(person_id, custom_prompt, menuPlan) {
  console.log("person_id: ", person_id)
  console.log("handleAcceptMenu: custom_prompt: ", custom_prompt)
  console.log("handleAcceptMenu: menuPlan: ", menuPlan)
  axios.post('http://localhost:3000/menuplan/saveMenuplan', {
    person_id: person_id,
    custom_prompt: custom_prompt.value,
    meals: menuPlan,
  })
  .then(response => {
      console.log('Response AcceptButton: \n', response.data)
  })
  .catch(error => {
      console.log("Error during fetch: ", error)
  })
}