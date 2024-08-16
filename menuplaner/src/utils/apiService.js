import axios from 'axios';

export function handleMenuIdeaUser(menuIdeaUser, LLMResponse) {
  axios.post('http://localhost:3000/menu', { 
    title: 'MenuUser444',
    body: menuIdeaUser.value,
    userId: 444,
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
