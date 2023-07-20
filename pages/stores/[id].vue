<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-card height="100%">
          <v-row dense>
            <v-col cols="5">
              <v-img
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
                aspect-ratio="1"
                cover
              />
            </v-col>
            <v-col cols="7">
              <v-card-title>
                <h3 class="headline mb-0">{{ place.name }}</h3>
              </v-card-title>
              <v-card-subtitle>{{ place.address }}</v-card-subtitle>

              <v-card-text>
                <v-row dense>
                  <v-col cols="12"
                    ><p class="text-green text-body-1">On Working</p></v-col
                  >
                  <v-col cols="4" class="font-weight-bold text-secondary">
                    Open hours:
                  </v-col>
                  <v-col cols="auto">{{ place.hours }}</v-col>
                  <v-col cols="4" class="font-weight-bold text-secondary"
                    >Contact:</v-col
                  >
                  <v-col>{{ place.phone }}</v-col>
                </v-row>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card title="Rating" height="100%">
          <v-card-text class="text-center">
            <strong class="text-h5">4.3</strong>
            <v-rating
              dense
              color="primary"
              size="large"
              :model-value="4.3"
              density="compact"
            />
            <p>123 reviews</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title> Photos </v-card-title>
          <v-card-item>
            <v-row>
              <v-col cols="3" v-for="i in 10">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
                  aspect-ratio="1"
                  cover
                />
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const { params } = useRoute();
const { loading, refetch, result } = useGetPlaceQuery({
  id: params.id as string,
});

const place = computed(() => result.value?.place ?? ({} as TPlace));
</script>
