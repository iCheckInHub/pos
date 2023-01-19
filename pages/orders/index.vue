<template>
  <v-card>
    <v-card-text class="d-flex align-center justify-space-between">
      <v-btn
        rounded="pill"
        color="secondary"
        prepend-icon="mdi-reload"
        @click="refresh"
      >
        Refresh</v-btn
      >
      <v-spacer />
      <v-text-field
        append-inner-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        clearable
        v-model="filters.search"
      />
    </v-card-text>
    <v-card-text class="d-flex">
      <v-select
        :items="places"
        label="Place"
        clearable
        hide-details
        item-title="name"
        item-value="id"
        :loading="loadingPlaces"
        v-model="filters.place_id"
      />
      <v-select
        :items="statusList"
        v-model="filters.status"
        label="Status"
        clearable
        hide-details
      >
        <template #item="{ item, props }">
          <v-list-item v-bind="props">
            <template #append>
              <v-icon
                icon="mdi-circle"
                :color="useColorStatus(item.title)"
                size="x-small"
              ></v-icon>
            </template>
          </v-list-item>
        </template>
      </v-select>
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
        :items="orders"
        :loading="loadingOrders"
        multi-sort
        @click:row="(event:any, {item}:any) => $router.push({name: 'orders-id', params: {id: item.value}})"
        hide-default-footer
        :sort-by="parseOrderByVariablesToKey(filterVariables.orderBy)"
        @update:sort-by="
          filters.orderBy = parseOrderByVariablesToQuery($event) as any
        "
        class="row-hover"
      >
        <template v-slot:bottom></template>
      </v-data-table>
    </v-card-item>
    <v-pagination
      :length="paginator.lastPage"
      :model-value="filterVariables.page"
      @update:model-value="filters.page = $event.toString() as any"
    />
  </v-card>
</template>
<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router';

definePageMeta({
  keepalive: true,
});

const headers = [
  {
    title: 'No.',
    sortable: true,
    key: 'no',
  },
  { title: 'Customer', key: 'user.name', align: 'end' },
  { title: 'Status', key: 'status', align: 'end' },
  { title: 'Total', key: 'total', align: 'end' },
  { title: 'Time', key: 'created_at', align: 'end' },
];

const statusList = [
  { title: 'Pending', value: 'pending' },
  { title: 'Confirmed', value: 'confirmed' },
  { title: 'Canceled', value: 'canceled' },
  { title: 'Completed', value: 'completed' },
];

const filters = reactive({
  page: useRouteQuery('page', '1', { mode: 'push' }),
  search: useRouteQuery('search', null, { mode: 'push' }),
  status: useRouteQuery('status', null, { mode: 'push' }),
  place_id: useRouteQuery('place_id', null, { mode: 'push' }),
  orderBy: useRouteQuery('orderBy', [], { mode: 'push' }),
});

const { loading: loadingPlaces, result: resultPlaces } = useGetPlaceListQuery();

const filterVariables = computed(() => {
  return filterEmptyProperties({
    page: parseInt(filters.page),
    search: filters.search,
    status: filters.status,
    place_id: filters.place_id,
    orderBy: parseOrderByQueryToColumn(filters.orderBy),
  });
});

const { result: resultOrders, loading: loadingOrders } = useGetOrdersQuery(
  () => filterVariables.value,
  {
    debounce: 500,
  }
);

const places = computed(() => resultPlaces.value?.placeList ?? []);
const orders = computed(() => resultOrders.value?.orders?.data ?? []);
const paginator = computed(
  () => (resultOrders.value?.orders?.paginatorInfo ?? {}) as TPaginatorInfo
);

const refresh = () => {
  useRouter().replace({ query: {} });
};

const onClickRow = (event: any, item: any) => {
  console.log(item);
};
</script>
