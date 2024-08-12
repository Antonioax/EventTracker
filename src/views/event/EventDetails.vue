<script setup>
defineProps(["event"]);
</script>

<template>
  <div v-if="event" class="text-center">
    <p class="mb-10">{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>- {{ event.description }}-</p>
  </div>
</template>
