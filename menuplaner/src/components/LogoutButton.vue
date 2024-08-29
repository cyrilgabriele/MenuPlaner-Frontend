<script setup>
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const handleLogout = () => {
  userStore.logout({ logoutParams: { returnTo: window.location.origin } })
}
</script>

<template>
  <div>
    <button class='bg-gray-800 rounded-md px-1' @click="handleLogout">Log out</button>
  </div>
</template>
