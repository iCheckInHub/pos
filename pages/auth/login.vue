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
      <v-card-title class="my-8">Login to System</v-card-title>
      <v-card-text>
        <v-text-field
          label="Username"
          prepend-icon="mdi-account"
          name="username"
          v-model="input.username"
        />
        <v-text-field
          label="Password"
          prepend-icon="mdi-lock"
          type="password"
          name="password"
          v-model="input.password"
        />
        <v-btn color="primary" text block @click="onLogin" :loading="loading"
          >Login</v-btn
        >
      </v-card-text>
      <v-divider />
      <span class="text-secondary-lighten-2">
        Or if you forgot your password
      </span>
      <v-card-actions class="justify-center">
        <v-btn to="/auth/forgot" color="primary">Forgot Password?</v-btn>
      </v-card-actions>
    </v-card>
  </v-parallax>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank',
});

const input = reactive({
  username: 'mollie04@example.net',
  password: '123456',
});

const { mutate, loading } = useLoginMutation({
  variables: input,
});

const auth = useApollo();

const onLogin = () => {
  mutate()
    .then((result) => {
      return auth.onLogin(result?.data?.login?.token as string);
    })
    .then(() => {
      useRouter().push('/places');
    });
};
</script>
