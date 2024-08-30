import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'

export const useUserStore = defineStore('user', () => {
  const { user, isAuthenticated } = useAuth0()
  const person_id = ref(null)
  const isLoggedIn = ref(false)

  const updatePersonId = () => {
    if (isAuthenticated.value && user.value && user.value.sub) {
      person_id.value = user.value.sub
      isLoggedIn.value = true
      console.log('User ID set:', person_id.value)
    } else {
      person_id.value = null
      isLoggedIn.value = false
      console.log("User is not authenticated or user data is not available.")
    }
  }

  watch([isAuthenticated, user], () => {
    updatePersonId()
  })

  updatePersonId()

  return {
    person_id,
    isLoggedIn,
  }
})
