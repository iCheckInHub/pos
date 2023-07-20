<template>
  <v-row
    class="h-screen"
    align="center"
    justify="center"
    no-gutters
  >
    <v-col cols="8">
      <v-parallax
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        class="h-screen"
      />
    </v-col>
    <v-col cols="4">
      <NuxtPage />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank',
});
</script>
