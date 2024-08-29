import { defineStore } from 'pinia'
import { ref, watch, toRaw } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'

export const useUserStore = defineStore('user', () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const person_id = ref(null)
  const isLoggedIn = ref(false)

  const setPersonId = (id) => {
    person_id.value = id
  }

  watch(isAuthenticated, (newVal) => {
    if (newVal) {
      const rawUser = toRaw(user.value); // Get the raw object
      console.log('User object:', rawUser);
      if (rawUser && rawUser.sub) {
        setPersonId(rawUser.sub);
        isLoggedIn.value = true;
      } else {
        console.error("User object does not have 'sub' property.");
      }
    } else {
      setPersonId(null);
      isLoggedIn.value = false;
    }
  })

  return {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
    person_id,
    isLoggedIn,
    setPersonId
  }
})
