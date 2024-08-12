<script setup>
defineProps(["event"]);
</script>

<template>
  <div v-if="event" class="text-center">
    <p class="mb-10">Edit the event here.</p>
  </div>
</template>
