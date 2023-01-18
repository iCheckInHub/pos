<template>
  <v-col cols="6" md="4">
    <v-card variant="flat" @click="$emit('onClick', service)">
      <v-img :src="service.image" aspect-ratio="1" cover></v-img>
      <v-card-title class="text-body-1 font-weight-bold px-0">
        {{ service.name }}
      </v-card-title>
      <div class="d-flex justify-space-between">
        <v-sheet class="d-flex align-center font-weight-bold">
          <v-icon size="x-small">mdi-currency-usd</v-icon>
          {{ service.price }}
        </v-sheet>
        <v-sheet>
          <v-icon color="grey" size="x-small">mdi-plus-circle-outline</v-icon>
        </v-sheet>
      </div>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
import { MenuService } from '@/graphql/types';
const props = defineProps<{
  service: any;
}>();
</script>
