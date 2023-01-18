<template>
  <v-layout class="bg-grey-lighten-5">
    <v-main><slot /> </v-main>
  </v-layout>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'overflow-y-hidden',
  },
  bodyAttrs: {
    class: 'overflow-y-hidden',
  },
});
</script>
