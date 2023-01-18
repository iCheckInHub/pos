<template>
  <v-row align="center" justify="center" class="h-75">
    <v-card class="text-center" variant="flat" color="transparent">
      <v-avatar size="120" color="primary">
        <v-img
          v-if="user.avatar"
          :src="user.avatar"
          :alt="user.name"
          referrerpolicy="no-referrer"
        />
        <v-icon v-else size="120" :icon="'mdi-account'" />
      </v-avatar>
      <v-card-item>
        <v-card-title>{{ user.name }}</v-card-title>
        <v-card-subtitle>{{ user.email }}</v-card-subtitle>
      </v-card-item>
      <v-card-actions>
        <v-btn to="/auth/login">Login</v-btn>
        <v-spacer />
        <v-btn rounded="pill" color="warning" @click="onLogout">Logout</v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>
<script setup lang="ts">
const { result } = useGetProfileQuery();
console.log(result);

const user = computed(() => result.value?.me ?? ({} as TUser));

const onLogout = () => {
  useApollo().onLogout();
};
</script>
