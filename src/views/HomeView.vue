<script setup>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";

import { onMounted, ref } from "vue";

const allEvents = ref([]);

async function fetchEvents() {
  try {
    const { data } = await EventService.getEvents();
    allEvents.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

onMounted(() => {
  fetchEvents();
});
</script>

<template>
  <ul>
    <EventCard v-for="event of allEvents" :key="event.id" :event="event"></EventCard>
  </ul>
</template>
