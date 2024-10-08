import './assets/index.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createAuth0 } from '@auth0/auth0-vue';
import './assets/index.css'
import { createPinia } from 'pinia'


const app = createApp(App);

app
  .use(router)
  .use(
    createAuth0({
      domain: import.meta.env.VITE_AUTH0_DOMAIN,
      clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
      authorizationParams: {
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
      },
    })
  )
  .use(createPinia())
  .mount("#app");