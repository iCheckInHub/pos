<template>
  <v-row class="h-screen" align="center" justify="center">
    <v-sheet>
      <v-btn
        :to="{ name: 'auth-login' }"
        color="red darken-1"
        block
        class="my-1"
        >Login page</v-btn
      >
      <v-progress-circular
        size="x-large"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <h3 class="text-h6 mt-3 text-secondary">Loading...</h3>
      <v-btn @click="onClick">Click</v-btn>
    </v-sheet>
  </v-row>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'blank',
});

const runtimeConfig = useRuntimeConfig();

const { params, query } = useRoute();
console.log(params, query);

const onClick = async () => {
  useFetch(
    `${runtimeConfig.public.apiUrl}/api/login/${params.provider}/callback`,
    {
      query,
    }
  )
    .then(({ data, pending, error, refresh }) => {
      const { token } = data.value as any;
      if (token) {
        useApollo()
          .onLogin(token)
          .then(() => {
            useRouter().push('/');
          });
      } else {
        throw new Error('Token not found');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
