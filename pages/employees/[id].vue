<template>
  <v-container>
    <v-form @submit.prevent="onSave">
      <v-card color="white" :loading="loading">
        <v-card-title class="pa-0">
          <v-list-item class="py-3">
            <template #prepend>
              <v-list-item-action>
                <v-avatar>
                  <v-img
                    v-if="employee.avatar"
                    :src="(employee.avatar as string)"
                    cover
                  />
                  <v-icon v-else icon="mdi-account"></v-icon>
                </v-avatar>
              </v-list-item-action>
            </template>
            <v-list-item-title>
              <v-text-field
                placeholder="Employee Name"
                v-model="employee.name"
                variant="plain"
                single-line
              ></v-text-field>
            </v-list-item-title>
            <template #append>
              <v-chip
                v-if="!employee.active"
                color="error"
                prepend-icon="mdi-briefcase"
                >Inactive</v-chip
              >
            </template>
          </v-list-item>
        </v-card-title>
        <v-divider />
        <v-row>
          <v-col cols="6">
            <v-sheet class="px-3">
              <v-list-subheader
                class="font-weight-bold text-secondary text-uppercase"
                >Contact information</v-list-subheader
              >
              <v-text-field
                label="Phone"
                placeholder="Employee phone"
                v-model="employee.phone"
                variant="plain"
                :hint="
                  employee.phone
                    ? mask.masked(employee.phone)
                    : '(555) 555-5555'
                "
              ></v-text-field>
              <v-text-field
                label="Email"
                placeholder="Employee email"
                v-model="employee.email"
                variant="plain"
              ></v-text-field>
              <v-text-field
                label="Address"
                placeholder="Employee address"
                v-model="employee.address"
                variant="plain"
              ></v-text-field>
              <v-list-subheader
                class="font-weight-bold text-secondary text-uppercase mt-3"
                >Basic information</v-list-subheader
              >
              <v-text-field
                label="Birthday"
                placeholder="Employee birthday"
                v-model="employee.birthday"
                variant="plain"
                hint="YYYY-MM-DD"
              ></v-text-field>
              <v-select
                :items="['male', 'female']"
                label="Gender"
                v-model="employee.gender"
                variant="plain"
                hide-details
              ></v-select>
              <v-switch
                label="Active"
                color="primary"
                v-model="employee.active"
              ></v-switch>
            </v-sheet>
          </v-col>
          <v-divider vertical />
          <v-col cols="6">
            <div class="d-flex align-center py-3">
              <span
                class="text-body-2 font-weight-bold text-secondary text-uppercase"
              >
                Places
              </span>
              <v-spacer />
              <v-btn
                icon="mdi-pencil"
                size="x-small"
                color="secondary"
                density="comfortable"
                variant="outlined"
                @click="addMorePlace = !addMorePlace"
              ></v-btn>
            </div>

            <v-select
              :items="places"
              item-title="name"
              item-value="id"
              v-model="employee.placeIds"
              multiple
              variant="plain"
            >
              <template v-slot:selection="{ item }">
                <v-list-item
                  :title="item?.title"
                  :subtitle="item.raw.address"
                  class="px-0"
                ></v-list-item>
              </template>
              <template v-slot:item="{ props, item }">
                <v-list-item
                  v-bind="props"
                  :prepend-icon="
                    employee.placeIds?.includes(item.value)
                      ? 'mdi-checkbox-marked'
                      : 'mdi-checkbox-blank-outline'
                  "
                  :title="item?.title"
                  :subtitle="item?.value"
                ></v-list-item>
              </template>
            </v-select>
            <!-- <template v-if="!addMorePlace">
              <template v-for="(place, index) in places">
                <v-list-item
                  class="px-0"
                  v-if="employee.placeIds?.includes(place.id)"
                >
                  <v-list-item-title class="font-weight-bold">{{
                    place.name
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="text-secondary">{{
                    place.address
                  }}</v-list-item-subtitle>
                </v-list-item>
              </template>
            </template>
            <v-select
              v-else
              :items="places"
              item-title="name"
              item-value="id"
              v-model="employee.placeIds"
              multiple
            >
              <template v-slot:item="{ props, item }">
                <v-list-item
                  v-bind="props"
                  :prepend-icon="
                    employee.placeIds?.includes(item.value)
                      ? 'mdi-checkbox-marked'
                      : 'mdi-checkbox-blank-outline'
                  "
                  :title="item?.title"
                  :subtitle="item?.value"
                ></v-list-item>
              </template>
            </v-select> -->
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            rounded="pill"
            width="100"
            variant="flat"
            type="submit"
            :loading="loadingSaveEmployee"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
import { Mask } from 'maska';
const mask = new Mask({ mask: '(###) ###-####' });
const { params } = useRoute();
const employee = ref({} as any);
const addMorePlace = ref(false);
const { result: resultPlaces } = useGetPlaceListQuery();

const { onResult } = useGetEmployeeQuery(
  {
    id: params.id as string,
  },
  {
    enabled: !!params.id,
  }
);

const loading = useQueryLoading();

onResult(({ data }) => {
  employee.value = Object.assign({}, data?.employee);
});

const places = computed(() => {
  return resultPlaces?.value?.placeList || [];
});

const { mutate: saveEmployee, loading: loadingSaveEmployee } =
  useSaveEmployeeMutation(() => ({
    variables: {
      input: {
        active: employee.value?.active as boolean,
        name: employee.value?.name as string,
        email: employee.value?.email,
        phone: employee.value?.phone,
        address: employee.value?.address,
        avatar: employee.value?.avatar,
        birthday: employee.value?.birthday,
        gender: employee.value?.gender,
        id: employee.value?.id,
        placeIds: employee.value?.placeIds,
      } as TEmployeeInput,
    },
    refetchQueries: ['getEmployee'],
  }));

const onSave = () => {
  saveEmployee();
  addMorePlace.value = false;
};
</script>
