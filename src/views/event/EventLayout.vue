<script setup>
import EventService from "@/services/EventService";

import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps(["id"]);
const router = useRouter();

const event = ref(null);

async function fetchEvents() {
  try {
    const { data } = await EventService.getEvent(props.id);
    event.value = data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      router.push({
        name: "NotFoundResource",
        params: { resource: "event" }
      });
    } else {
      router.push({ name: "NetworkError" });
    }
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
      <RouterLink :to="{ name: 'EventDetails' }" exact-active-class="font-bold">Details</RouterLink>
      <RouterLink :to="{ name: 'EventRegister' }" exact-active-class="font-bold"
        >Register</RouterLink
      >
      <RouterLink :to="{ name: 'EventEdit' }" exact-active-class="font-bold">Edit</RouterLink>
    </div>

    <RouterView :event="event"></RouterView>
  </div>
</template>
