<script setup lang="ts">
import {useUserStore} from '../store/store.ts'
const myStore = useUserStore()
</script>

<template>
  <div class="greetings">
    <h1>I am a component 2</h1>
    Count : {{myStore.count}}
    <button @click="myStore.setUser()">Addition</button>
  </div>
</template>

<style scoped>
</style>
