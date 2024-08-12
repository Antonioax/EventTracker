<script setup>
import { useRouter } from "vue-router";

defineProps(["event"]);

const router = useRouter();

const onRegister = () => {
  router.push({ name: "EventDetails" });
};
</script>

<template>
  <div v-if="event" class="text-center">
    <p class="mb-10">Register for event here.</p>
    <button @click="onRegister" class="bg-emerald-300 py-2 px-4 hover:shadow-lg">Register Me!</button>
  </div>
</template>
