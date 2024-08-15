<script setup>
import { defineProps } from "vue";

const { event } = defineProps({
  event: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <RouterLink :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div class="w-full px-4 py-10 text-center border-2 border-black hover:shadow-2xl">
      <div class="text-sm mb-2">@{{ event.time }} on {{ event.date }}</div>
      <div class="text-2xl">{{ event.title }}</div>
    </div>
  </RouterLink>
</template>

<style scoped></style>
