<template>
  <v-card variant="flat">
    <v-card-text class="d-flex align-center justify-space-between">
      <div>
        <v-btn rounded="pill" size="small" color="primary" class="mr-1"
          >Add Place</v-btn
        >
        <v-btn rounded="pill" size="small" color="secondary">Refresh</v-btn>
      </div>
      <v-spacer />
      <v-text-field
        append-inner-icon="mdi-magnify"
        label="Search"
        single-line
        density="compact"
        hide-details
      />
    </v-card-text>
    <v-card-item>
      <template v-for="place in places">
        <v-list-item
          class="my-2 pa-0"
          :class="'bg-white'"
          lines="three"
          :to="{ name: 'places-id', params: { id: place.id } }"
        >
          <template v-slot:prepend>
            <v-avatar rounded="0" size="88">
              <v-img :src="place.image" cover />
            </v-avatar>
          </template>

          <v-list-item-title class="font-weight-bold">{{
            place.name
          }}</v-list-item-title>
          <v-list-item-subtitle class="my-2 text-secondary-darken-2">{{
            place.address
          }}</v-list-item-subtitle>
          <v-list-item-subtitle class="text-secondary">
            <v-icon
              icon="mdi-circle"
              color="green"
              size="x-small"
              start
            ></v-icon
            >{{ place.phone }}</v-list-item-subtitle
          >
        </v-list-item>
      </template>
    </v-card-item>
    <v-pagination :length="10"></v-pagination>
  </v-card>
</template>

<script setup lang="ts">
const { loading, refetch, result } = useGetPlacesQuery(
  {
    page: 1,
  },
  {
    fetchPolicy: 'cache-first',
  }
);

const places = computed(() => result.value?.places?.data ?? []);
</script>

<style></style>
