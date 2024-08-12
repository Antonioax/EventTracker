<script setup>
defineProps({
  resource: {
    type: String,
    required: true,
    default: "page"
  }
});
</script>

<template>
  <div class="text-center">
    <h1 class="text-5xl mb-4">Oops!</h1>
    <h3 class="text-md mb-10">The {{ resource }} you're looking for is not here.</h3>
    <RouterLink :to="{ name: 'EventList' }" class="text-2xl">Take me home</RouterLink>
  </div>
</template>
