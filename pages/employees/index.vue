<template>
  <v-card>
    <v-card-text class="d-flex align-center justify-space-between">
      <v-btn
        rounded="pill"
        color="secondary"
        prepend-icon="mdi-reload"
        class="text-capitalize"
        >Refresh</v-btn
      >
      <v-spacer />
      <v-text-field
        append-inner-icon="mdi-magnify"
        label="Search"
        hide-details
        variant="outlined"
        color="secondary"
        density="compact"
        clearable
        v-model="filters.search"
      />
    </v-card-text>
    <v-card-text class="d-flex">
      <v-row dense>
        <v-col>
          <v-select
            density="compact"
            :items="places"
            label="Places"
            clearable
            :loading="loadingPlaces"
            hide-details
            item-title="name"
            item-value="id"
            v-model="filters.place_id"
            variant="outlined"
            color="secondary"
          />
        </v-col>
        <v-col>
          <v-combobox
            :items="['Pending', 'Completed']"
            density="compact"
            label="Status"
            clearable
            hide-details
            variant="outlined"
            color="secondary"
          />
        </v-col>
        <v-col>
          <v-text-field
            density="compact"
            label="Date"
            hide-details
            prepend-inner-icon="mdi-calendar-range"
            variant="outlined"
            color="secondary"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-item>
      <v-data-table
        :headers="headers"
        :items-length="paginator.total"
        :items="employees"
        :loading="loadingEmployees"
        multi-sort
        hide-default-footer
        @click:row="(event:any, {item}:any) => $router.push({name: 'employees-id', params: {id: item.value}})"
        class="row-hover text-secondary"
      >
        <template #bottom></template>
        <template #item.name="{ item }">
          <v-list-item class="px-0 text-black">
            <template #prepend>
              <v-avatar :image="item.raw.avatar" size="32"> </v-avatar>
            </template>
            <v-list-item-title>{{ item.raw.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.raw.email }}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="!item.raw.active">
              <span class="text-red-darken-2"> Inactive</span>
            </v-list-item-subtitle>
          </v-list-item>
        </template>
        <template #item.phone="{ item }">
          {{ !item.raw.phone ? '' : mask.masked(item.raw.phone) }}
        </template>
        <template #item.roles="{ item }">
          <span class="text-capitalize">{{
            item.raw.roles.map((role: any) => role.name).join(', ')
          }}</span>
        </template>
      </v-data-table>
    </v-card-item>
    <v-pagination
      :length="paginator.lastPage"
      :model-value="filterVariables.page"
      @update:model-value="filters.page = $event.toString()"
    ></v-pagination>
  </v-card>
</template>
<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router';
import { Mask } from 'maska';

definePageMeta({
  keepalive: true,
});
const filters = reactive({
  page: useRouteQuery<string>('page', '1', { mode: 'push' }),
  place_id: useRouteQuery('place_id', null, { mode: 'push' }),
  search: useRouteQuery('search', null, { mode: 'push' }),
});

const mask = new Mask({ mask: '+# (###) ###-####' });

const filterVariables = computed(() => {
  return filterEmptyProperties({
    page: parseInt(filters.page),
    place_id: filters.place_id,
    search: filters.search,
  });
});

const headers = [
  { title: 'Employee.', key: 'name' },
  { title: 'Phone', key: 'phone', align: 'end' },
  { title: 'Birthday', key: 'birthday', align: 'end' },
  { title: 'Roles', key: 'roles', align: 'end' },
];

const { loading: loadingPlaces, result: resultPlaces } = useGetPlaceListQuery();

const { result: resultEmployees, loading: loadingEmployees } =
  useGetEmployeesQuery(() => filterVariables.value, {
    debounce: 500,
  });

const places = computed(() => resultPlaces.value?.placeList ?? []);
const employees = computed(() => resultEmployees.value?.employees?.data ?? []);
const paginator = computed(
  () =>
    (resultEmployees.value?.employees?.paginatorInfo ?? {}) as TPaginatorInfo
);
</script>
