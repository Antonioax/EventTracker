<script setup>
import EventService from "@/services/EventService";

import { onMounted, ref } from "vue";

const props = defineProps(["id"]);

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

    <div class="flex justify-center gap-2 mb-6">
      <RouterLink :to="{ name: 'EventDetails', params: { id } }" exact-active-class="font-bold">Details</RouterLink>
      <RouterLink :to="{ name: 'EventRegister', params: { id } }" exact-active-class="font-bold">Register</RouterLink>
      <RouterLink :to="{ name: 'EventEdit', params: { id } }" exact-active-class="font-bold">Edit</RouterLink>
    </div>

    <RouterView :event="event"></RouterView>
  </div>
</template>
