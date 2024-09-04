import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'

export const useUserStore = defineStore('user', () => {
  const { user, isAuthenticated } = useAuth0()
  const auth0_user_id = ref(null)
  const isLoggedIn = ref(false)
  const nickname = ref("")

  const updatePersonId = () => {
    if (isAuthenticated.value && user.value && user.value.sub) {
      auth0_user_id.value = user.value.sub
      isLoggedIn.value = true
      nickname.value = user.value.nickname
      console.log('User ID set:', auth0_user_id.value)
    } else {
      auth0_user_id.value = null
      isLoggedIn.value = false
      console.log("User is not authenticated or user data is not available.")
    }
  }

  watch([isAuthenticated, user], () => {
    updatePersonId()
  })

  updatePersonId()

  return {
    auth0_user_id,
    isLoggedIn,
    nickname
  }
})
