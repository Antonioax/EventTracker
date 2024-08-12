<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col justify-center items-center mt-20">
    <nav class="flex gap-4 justify-between items-center text-green-800">
      <RouterLink :to="{ name: 'home' }" class="font-semibold text-lg">Home</RouterLink> •
      <RouterLink :to="{ name: 'about' }" class="font-semibold text-lg">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
