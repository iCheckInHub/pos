<template>
  <v-card title="Test">
    <input type="file" accept="image/*" @change="handleFileChange" />
    <v-card-actions>
      <v-btn @click="mutate">Upload</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import { useUploadImageMutation } from '~~/utils/graphql';

const selectedFile = ref(null);
const handleFileChange = (event: any) => {
  selectedFile.value = event.target.files[0];
};

const { mutate } = useUploadImageMutation(() => ({
  variables: {
    file: selectedFile.value,
  },
}));
</script>
