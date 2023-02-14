<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Test from '../components/test/index.vue'
import TestTwo from '../components/testTwo/index.vue'

console.log('缓存  home');
</script>

<template>
  <main>
    <router-link to="/testkeep">testkeep</router-link>
    <Test/>
    <TestTwo/>
    <TheWelcome />
  </main>
</template>
