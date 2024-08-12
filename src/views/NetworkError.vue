<template>
  <div class="text-center">
    <h1 class="text-5xl mb-6">Uh-Oh!</h1>
    <h3 class="text-lg">
      It looks like you're experiencing some network issues, <br>please take a breath and
      <a href="#" @click="$router.go(-1)" class="text-emerald-800">click here</a> to try again.
    </h3>
  </div>
</template>
