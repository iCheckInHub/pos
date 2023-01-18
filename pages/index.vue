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
      <template v-for="place in 5">
        <v-list-item class="my-2 pa-0" :class="'bg-white'" lines="three">
          <template v-slot:prepend>
            <v-avatar rounded="0" size="88">
              <v-img src="https://picsum.photos/200/300" cover />
            </v-avatar>
          </template>

          <v-list-item-title class="font-weight-bold"
            >Lorem ipsum dolor sit amet consectetur</v-list-item-title
          >
          <v-list-item-subtitle class="my-2 text-secondary-darken-2"
            >Lorem ipsum dolor sit amet consectetur adipisicing
            elit.</v-list-item-subtitle
          >
          <v-list-item-subtitle class="text-secondary">
            <v-icon
              icon="mdi-circle"
              color="green"
              size="x-small"
              start
            ></v-icon
            >Working</v-list-item-subtitle
          >
        </v-list-item>
      </template>
    </v-card-item>
    <v-pagination
      size="x-small"
      :length="10"
      active-color="primary"
      color="grey-darken-5"
      total-visible="5"
      class="mx-auto"
      variant="tonal"
    ></v-pagination>
  </v-card>
</template>

<script setup lang="ts"></script>

const placeHolderImage = "" ;
<style></style>
