<script setup lang="ts">
import {computed} from 'vue'
import HelloWorld from "../components/HelloWorld.vue";
import Component2 from '../components/Component2.vue'
const now = computed(() => Date.now())
</script>

<template>
  <main>
    <HelloWorld />
    <Component-2/>
  </main>
</template>
