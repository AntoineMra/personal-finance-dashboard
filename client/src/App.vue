<template>
  <main>
    <app-navigation />
    <router-view />
  </main>
</template>

<script setup lang="ts">
import AppNavigation from './components/layouts/AppNavigation.vue'
</script>

<style lang="scss">
#app {
  margin-left: 13rem;
  min-height: 100vh;
}
</style>
