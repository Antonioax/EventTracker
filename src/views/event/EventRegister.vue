<script setup>
defineProps(["event"]);
</script>

<template>
  <div v-if="event" class="text-center">
    <p class="mb-10">Register for event here.</p>
  </div>
</template>
