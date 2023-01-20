<template>
  <v-card :loading="loadingOrders">
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
        hide-details
        clearable
        v-model="filters.search"
        variant="outlined"
        color="secondary"
        density="compact"
      />
    </v-card-text>
    <v-card-text class="d-flex">
      <v-row dense>
        <v-col
          ><v-select
            :items="places"
            label="Place"
            clearable
            hide-details
            item-title="name"
            item-value="id"
            :loading="loadingPlaces"
            v-model="filters.place_id"
            variant="outlined"
            color="secondary"
            density="compact"
        /></v-col>
        <v-col>
          <v-select
            :items="statusList"
            v-model="filters.status"
            label="Status"
            clearable
            hide-details
            variant="outlined"
            color="secondary"
            density="compact"
          >
            <template #item="{ item, props }">
              <v-list-item v-bind="props">
                <template #append>
                  <v-icon
                    icon="mdi-circle"
                    :color="useColorStatus(item.value)"
                    size="x-small"
                  ></v-icon>
                </template>
              </v-list-item>
            </template>
          </v-select>
        </v-col>
        <v-col>
          <v-text-field
            label="Date"
            hide-details
            prepend-inner-icon="mdi-calendar-range"
            variant="outlined"
            color="secondary"
            density="compact"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-item>
      <v-data-table
        :headers="headers"
        :items-length="paginator.total"
        :items="orders"
        multi-sort
        @click:row="(event:any, {item}:any) => $router.push({name: 'orders-id', params: {id: item.value}})"
        hide-default-footer
        :sort-by="parseOrderByVariablesToKey(filterVariables.orderBy)"
        @update:sort-by="
          filters.orderBy = parseOrderByVariablesToQuery($event) as any
        "
        class="row-hover text-secondary"
      >
        <template v-slot:item.no="{ item }">
          <strong class="text-body-1 font-weight-bold text-black">{{
            item.raw.no
          }}</strong></template
        >
        <template v-slot:item.customer="{ item }">
          <v-list-item
            nav
            :title="item.raw.customer.name"
            :subtitle="item.raw.customer.phone"
            class="px-0"
          >
            <template #prepend>
              <v-avatar :image="item.raw.customer.avatar" size="32"></v-avatar>
            </template>
          </v-list-item>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip
            :color="useColorStatus(item.raw.status)"
            variant="text"
            class="text-capitalize font-weight-medium"
            >{{ item.raw.status }}</v-chip
          >
        </template>
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
  { title: 'Customer', key: 'customer', align: 'start' },
  { title: 'Status', key: 'status', align: 'end' },
  { title: 'Time', key: 'created_at', align: 'end' },
  { title: 'Total', key: 'total', align: 'end' },
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

const loading = useQueryLoading();

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
