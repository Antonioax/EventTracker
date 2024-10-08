<script setup>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";

import { onMounted, ref, computed, watchEffect } from "vue";
import { useRouter } from "vue-router";

const props = defineProps(["page"]);
const router = useRouter();

const allEvents = ref([]);
const totalEvents = ref(0);

const page = computed(() => props.page);
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2);
  return page.value < totalPages;
});

async function fetchEvents() {
  try {
    const { data, headers } = await EventService.getEvents(2, page.value);
    allEvents.value = data;
    totalEvents.value = headers["x-total-count"];
  } catch (error) {
    router.push({ name: "NetworkError" });
  }
}

onMounted(() => {
  watchEffect(() => {
    fetchEvents();
  });
});
</script>

<template>
  <div v-if="allEvents.length > 0" class="flex flex-col justify-center items-center">
    <ul class="flex flex-col gap-4 mb-16 w-[300px] max-w-[80%]">
      <EventCard v-for="event of allEvents" :key="event.id" :event="event"></EventCard>
    </ul>
    <div class="flex gap-2">
      <RouterLink :to="{ name: 'EventList', query: { page: page - 1 } }" rel="Back" data-test="back" v-if="page != 1"
        >Back</RouterLink
      >
      <div v-if="page != 1 && hasNextPage" data-test="separator">∙</div>
      <RouterLink :to="{ name: 'EventList', query: { page: page + 1 } }" rel="Next" data-test="next" v-if="hasNextPage"
        >Next</RouterLink
      >
    </div>
  </div>

  <div v-else>
    No events available.
  </div>
</template>
