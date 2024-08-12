<script setup>
import EventService from "@/services/EventService";

import { onMounted, ref } from "vue";

const props = defineProps({
  id: {
    required: true
  }
});

const event = ref(null);

async function fetchEvents() {
  try {
    const { data } = await EventService.getEvent(props.id);
    event.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

onMounted(() => {
  fetchEvents();
});
</script>

<template>
  <div v-if="event" class="text-center">
    <h1 class="font-semibold text-5xl mb-6">{{ event.title }}</h1>
    <p class="mb-10">{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>- {{ event.description }}- </p>
  </div>
</template>
