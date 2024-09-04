<script setup>
import { onMounted, computed } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue'
import { createPerson, createUser, getUser } from '@/utils/apiService'
import { useUserStore } from '@/stores/userStore'

const { isAuthenticated, user } = useAuth0()
const userStore = useUserStore()

const isUserReady = computed(() => isAuthenticated.value && user.value && userStore.auth0_user_id)

const handleUser = async () => {
  if (isUserReady.value) {
    console.log("In Callback: User authenticated")
    const auth0_user_id = userStore.auth0_user_id
    const existingUser = await getUser(auth0_user_id)

    if (existingUser) {
      console.log("User already exists in the database", existingUser)
    } else {
      const person_name = user.value.name
      const createdPerson = await createPerson(person_name)
      const person_id = createdPerson.person_id
      console.log("Callback: person_id: ", person_id)
      const nickname = userStore.nickname
      console.log("nickname: ", nickname)
      const newUser = await createUser(person_id, auth0_user_id, nickname)
      console.log("Callback: New user created in DB: ", newUser)
    }
  } else {
    console.log("Callback: User is not ready yet, retrying...")
    setTimeout(handleUser, 500) 
  }
}

onMounted(() => {
  console.log("Callback.vue: onMounted()")
  handleUser()
})
</script>

<template>
  <div>
    <p>Loading...</p>
  </div>
</template>
