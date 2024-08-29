import axios from 'axios';

export function handleMenuIdeaUser(menuIdeaUser, LLMResponse) {
  axios.post('http://localhost:3000/menuplan/generateMenuplan', { 
    // TODO: manage to get this states dynamically  
    custom_prompt: "handleMenuIdeaUser: custom_prompt hardcoded"
  })
  .then(response => {
    console.log('This is the axios response: \n', response.data);
    LLMResponse.value = response.data;
    console.log("LLM response in frontend: ", LLMResponse.value);
    menuIdeaUser.value = '';
  })
  .catch(error => {
    console.log("Error during fetch: ", error);
  });
}


export function handleAcceptMenu(menuPlan) {
  console.log("menuPlan: ", menuPlan)
  axios.post('http://localhost:3000/menuplan/saveMenuplan', {
    // TODO: manage to get this states dynamically  
    person_id: 1,
      custom_prompt: "handleAcceptMenu: custom_prompt hardcoded",
      meals: menuPlan,
  })
  .then(response => {
      console.log('Response AcceptButton: \n', response.data);
  })
  .catch(error => {
      console.log("Error during fetch: ", error);
  })
}