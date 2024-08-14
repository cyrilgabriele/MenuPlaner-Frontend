<script setup>
import { onMounted, ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import VegetarianSwitch from '@/components/VegetarianSwitch.vue';
//import { fetchAuth0 } from '@/utils/fetchAuth0';

const { user, isAuthenticated, isLoading } = useAuth0();
const userInfo = ref(null)

async function fetchAuth0 (isAuthenticated) {
    const { user } = useAuth0()
    console.log("in fetchAuth0(): isAuthenticated = ", isAuthenticated)
    console.log("is authenticated = ", isAuthenticated._value)
    isAuthenticated = isAuthenticated._value
    if (isAuthenticated === false) {
        console.error("NOT AUTHENTICATED!")
    } else {
        console.log("Is authenticated")
        const userID = user.value.sub
        console.log("userID = ", userID)
        console.log("In fetchAuth0: userID = ", userID.split('|')[1])
        return userID.split('|')[1]
    }
}

onMounted(() => 
  userInfo.value = fetchAuth0(isAuthenticated)
)

console.log("Hello from Profile.vue")
console.log("userInfo.value:", userInfo)


</script>

<template>
  <div>
    <h1>Profile</h1>
    <p>This is your profile page.</p>
    <VegetarianSwitch/>
  </div>
</template>