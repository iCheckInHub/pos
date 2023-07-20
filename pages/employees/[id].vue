<template>
  <v-container>
    <v-form @submit.prevent="onSave">
      <v-card color="white" :loading="loading">
        <v-list-item class="my-3">
          <template #prepend>
            <v-avatar>
              <v-img v-if="user.avatar" :src="(user.avatar as string)" cover />
              <v-icon v-else icon="mdi-account"></v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>
            <v-text-field placeholder="Employee Name" v-model="user.name" variant="plain" density="compact" single-line
              hide-details class="mt-n3 font-weight-bold"></v-text-field>
          </v-list-item-title>
          <v-list-item-subtitle class="text-light-blue text-capitalize text-body-1">
            {{ user?.roles?.map((item: any) => item.name)?.join(', ') }}
          </v-list-item-subtitle>
          <template #append>
            <v-slide-y-transition>
              <v-chip v-if="!user.active" color="red" prepend-icon="mdi-briefcase" variant="text"
                class="text-capitalize text-body-1 px-1">Inactive</v-chip>
            </v-slide-y-transition>
          </template>
        </v-list-item>
        <v-divider />

        <v-row>
          <v-col cols="6">
            <v-sheet class="px-3">
              <v-list-subheader class="font-weight-bold text-secondary text-uppercase">Contact
                information</v-list-subheader>
              <v-text-field label="Phone" v-model="user.phone" variant="plain"></v-text-field>
              <input v-model="user.phone" v-maska data-maska="+1 ### ###-####" class="d-none" />
              <v-text-field label="Email" placeholder="Employee email" v-model="user.email"
                variant="plain"></v-text-field>
              <v-text-field label="Address" placeholder="Employee address" v-model="user.address"
                variant="plain"></v-text-field>
              <v-list-subheader class="font-weight-bold text-secondary text-uppercase mt-3">Basic
                information</v-list-subheader>
              <v-text-field label="Birthday" placeholder="Employee birthday" v-model="user.birthday" variant="plain"
                hint="YYYY-MM-DD"></v-text-field>
              <v-select :items="['male', 'female']" label="Gender" v-model="user.gender" variant="plain"
                hide-details></v-select>
              <v-switch label="Active" color="primary" :true-value="true" :false-value="false"
                v-model="user.active"></v-switch>
            </v-sheet>
          </v-col>
          <v-divider vertical class="mt-3" />
          <v-col cols="6">
            <v-sheet class="px-3">
              <v-list-subheader class="font-weight-bold text-secondary text-uppercase">Stores</v-list-subheader>
              <v-list>
                <v-list-item v-for="store in stores" :title="store.name" :subtitle="store.address" item-value="id"
                  :value="store.id" @click="
                    user.storeIds = useToogleItem(user.storeIds, store.id)
                  " :prepend-icon="
  user?.storeIds?.includes(store.id)
    ? 'mdi-checkbox-marked'
    : 'mdi-checkbox-blank-outline'
">
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
        </v-row>
        <v-card-actions class="ma-5">
          <v-spacer />
          <v-btn color="primary" rounded="pill" width="120" variant="elevated" type="submit"
            :loading="loadingSaveUser">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>


import { vMaska } from 'maska';

const { params } = useRoute();
const user = ref({} as any);

const { result: resultStores } = useGetStoresListQuery();

const { onResult } = useGetUserQuery(
  {
    id: params.id as string,
  },
  {
    enabled: !!params.id,
  }
);

const loading = useQueryLoading();

const stores = computed(() => resultStores?.value?.getStoresList || []);

onResult(({ data }) => {
  user.value = Object.assign({}, data?.getUser);
});

const { mutate: saveUser, loading: loadingSaveUser } = useSaveUserMutation(
  () => ({
    variables: {
      input: {
        active: user.value?.active as boolean,
        name: user.value?.name as string,
        email: user.value?.email,
        phone: user.value?.phone,
        address: user.value?.address,
        avatar: user.value?.avatar,
        birthday: user.value?.birthday,
        gender: user.value?.gender,
        id: user.value?.id,
        storeIds: user.value?.storeIds,
      } as TUserInput,
    },
    refetchQueries: ['getUser'],
  })
);



const onSave = () => {
  saveUser().then(() => useNotifier().toastSuccess("Saved successfully!"));
};
</script>
