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
  <RouterLink :to="{ name: 'event-details', params: { id: event.id } }">
    <div>
      {{ event.title }}
    </div>
  </RouterLink>
</template>

<style scoped></style>
