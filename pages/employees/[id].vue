<template>
  <v-container>
    <v-form @submit.prevent="onSave">
      <v-card color="white" :loading="loading">
        <v-list-item class="my-3">
          <template #prepend>
            <v-avatar>
              <v-img
                v-if="employee.avatar"
                :src="(employee.avatar as string)"
                cover
              />
              <v-icon v-else icon="mdi-account"></v-icon>
            </v-avatar>
          </template>
          <v-list-item-title>
            <v-text-field
              placeholder="Employee Name"
              v-model="employee.name"
              variant="plain"
              density="compact"
              single-line
              hide-details
              class="mt-n3 font-weight-bold"
            ></v-text-field>
          </v-list-item-title>
          <v-list-item-subtitle
            class="text-light-blue text-capitalize text-body-1"
          >
            {{ employee?.roles?.map((item: any) => item.name)?.join(', ') }}
          </v-list-item-subtitle>
          <template #append>
            <v-slide-y-transition>
              <v-chip
                v-if="!employee.active"
                color="red"
                prepend-icon="mdi-briefcase"
                variant="text"
                class="text-capitalize text-body-1 px-1"
                >Inactive</v-chip
              >
            </v-slide-y-transition>
          </template>
        </v-list-item>
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
                v-model="employee.phone"
                variant="plain"
              ></v-text-field>
              <input
                v-model="employee.phone"
                v-maska
                data-maska="+1 ### ###-####"
                class="d-none"
              />
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
          <v-divider vertical class="mt-3" />
          <v-col cols="6">
            <v-sheet class="px-3">
              <v-list-subheader
                class="font-weight-bold text-secondary text-uppercase"
                >Places</v-list-subheader
              >
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
            </v-sheet>
          </v-col>
        </v-row>
        <v-card-actions class="ma-5">
          <v-spacer />
          <v-btn
            color="primary"
            rounded="pill"
            width="120"
            variant="elevated"
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
import { vMaska } from 'maska';

const { params } = useRoute();
const employee = ref({} as any);
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
};
</script>
