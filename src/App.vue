<script setup>
import { inject } from "vue";
import { RouterLink, RouterView } from "vue-router";

const GStore = inject("GStore");
</script>

<template>
  <div id="app">
    <div v-if="GStore.message" id="message" class="absolute top-4 right-4 bg-emerald-300 py-2 px-4 text-center">{{ GStore.message }}</div>
    <div class="flex flex-col justify-center items-center mt-20">
      <nav class="flex gap-4 justify-between items-center mb-16">
        <RouterLink :to="{ name: 'EventList' }" class="text-lg" active-class="font-bold"
          >Events</RouterLink
        >
        •
        <RouterLink :to="{ name: 'About' }" class="text-lg" active-class="font-bold"
          >About</RouterLink
        >
      </nav>
      <RouterView />
    </div>
  </div>
</template>
