<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    class="h-screen d-flex justify-center align-center"
  >
    <v-card
      class="text-center mx-5 text-white"
      color="transparent"
      variant="flat"
    >
      <v-avatar size="120">
        <v-img
          src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
          cover
        />
      </v-avatar>
      <v-card-title class="my-8">Forgot Password</v-card-title>
      <v-card-text>
        <v-text-field label="Email" prepend-icon="mdi-account" />
        <v-btn color="primary" text block>Submit</v-btn>
      </v-card-text>
      <v-divider />
      <span class="text-secondary-lighten-2"
        >Or if you remember your password</span
      >
      <v-card-actions class="justify-center">
        <v-btn to="/auth/login" color="primary">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-parallax>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank',
});
</script>
