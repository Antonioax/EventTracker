<script setup>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";

import { onMounted, ref, computed, watchEffect } from "vue";

const props = defineProps(["page"]);

const allEvents = ref([]);
const totalEvents = ref(0);

const page = computed(() => props.page);
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2);
  return page.value < totalPages;
});

async function fetchEvents() {
  try {
    allEvents.value = null;
    const { data, headers } = await EventService.getEvents(2, page.value);
    allEvents.value = data;
    totalEvents.value = headers["x-total-count"];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

onMounted(() => {
  watchEffect(() => {
    fetchEvents();
  });
});
</script>

<template>
  <ul>
    <EventCard v-for="event of allEvents" :key="event.id" :event="event"></EventCard>
  </ul>

  <RouterLink :to="{ name: 'home', query: { page: page - 1 } }" rel="Back" v-if="page != 1"
    >Back</RouterLink
  >
  <RouterLink
    :to="{ name: 'home', query: { page: page + 1 } }"
    rel="Next"
    v-if="hasNextPage"
    >Next</RouterLink
  >
</template>
