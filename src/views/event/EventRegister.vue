<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";

const { event } = defineProps(["event"]);
const GStore = inject("GStore");
const router = useRouter();

const onRegister = () => {
  GStore.message = "You are successfully registered for " + event.title;
  setTimeout(() => {
    GStore.message = "";
  }, 3000);
  router.push({ name: "EventDetails" });
};
</script>

<template>
  <div v-if="event" class="text-center">
    <p class="mb-10">Register for event here.</p>
    <button @click="onRegister" class="bg-emerald-300 py-2 px-4 hover:shadow-lg">
      Register Me!
    </button>
  </div>
</template>
