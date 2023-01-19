<template>
  <v-card>
    <v-card-text class="d-flex align-center justify-space-between">
      <v-btn rounded="pill" color="secondary" prepend-icon="mdi-reload"
        >Refresh</v-btn
      >
      <v-spacer />
      <v-text-field
        append-inner-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-card-text>
    <v-card-text class="d-flex">
      <v-select
        :items="places"
        label="Places"
        clearable
        :loading="loadingPlaces"
        hide-details
        item-title="name"
        item-value="id"
        v-model="filters.place_id"
      />

      <v-combobox
        :items="['Pending', 'Completed']"
        label="Status"
        clearable
        hide-details
      />
      <v-text-field
        label="Date"
        hide-details
        prepend-inner-icon="mdi-calendar-range"
      />
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
      >
        <template #bottom></template>
        <template #item.name="{ item }">
          <v-list-item
            lines="two"
            :prepend-avatar="item.raw.avatar"
            class="px-0"
          >
            <v-list-item-title>{{ item.raw.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.raw.email }}</v-list-item-subtitle>
          </v-list-item>
        </template>
        <template #item.phone="{ item }">
          {{ mask.masked(item.raw.phone) }}
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
});

const mask = new Mask({ mask: '(###) ###-####' });

const filterVariables = computed(() => {
  return filterEmptyProperties({
    page: parseInt(filters.page),
    place_id: filters.place_id,
  });
});

const headers = [
  { title: 'Employee.', key: 'name' },
  { title: 'Phone', key: 'phone', align: 'end' },
  { title: 'Time', key: 'created_at', align: 'end' },
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
