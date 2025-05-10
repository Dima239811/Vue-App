<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationApp from './components/NavigationApp.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <NavigationApp />
  <RouterView />
  <FooterComponent />
</template>



