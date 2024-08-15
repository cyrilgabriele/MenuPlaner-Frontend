import axios from 'axios';

//TODO use this function in for example MenuForm.vue => then generalize the function for example: instead of menuIdeaUser use prompt
// like this I can use the function as the general fetch function for the LLM (i.e. with any propmpt)

function handleMenuIdeaUser(menuIdeaUser) {
    axios.post('http://localhost:3000/menu', { 
      title: 'MenuUser444',
      body: menuIdeaUser,
      userId: 444,
    })
    .then(response => {
      console.log('This is the axios response: \n', response.data);
      const LLMResponse = response.data 
      console.log("LLM response in frontend: ", LLMResponse)
      menuIdeaUser.value = ''
    })
    .catch(error => {
      console.log("Error during fetch: ", error);
    });
  }

export {handleMenuIdeaUser}