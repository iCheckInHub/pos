<template>
  <v-card :loading="loadingOrders || loadingUsers" height="100%">
    <v-toolbar flat>
      <v-toolbar-title>
        Today calendar
      </v-toolbar-title>
    </v-toolbar>
    <VScheduler v-model="filters.scheduled_at" :resources="employees" :events="orders"
      :options="{ intervals: 60, resize: { disabled: true } }"
      @dblclick:event="$router.push({ name: 'orders-id', params: { id: $event.id } })" @update:event="onEventChange">
      <template #resource="{ resource }">
        <div>{{ resource.name }}</div>
      </template>
      <template #event="{ item }">
        <div>{{ `${item.no}` }}</div>
      </template>
    </VScheduler>
  </v-card>
</template>

<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router';
import VScheduler from '@vuetify-scheduler/components/VScheduler.vue'
import dayjs from "dayjs";
import { useGetOrdersListQuery, useGetUsersListQuery } from '~/utils/graphql';
import { SchedulerEvent } from '~/../vuetify-scheduler/src/types';

const notifier = useNotifier();

const filters = reactive({
  scheduled_at: useRouteQuery('date', dayjs().format('YYYY-MM-DD'), {
    mode: 'push', transform(val) {
      return dayjs(val).format('YYYY-MM-DD');
    },
  }),
});

const { loading, mutate: saveOrder } = useSaveOrderMutation()

const onEventChange = (event: SchedulerEvent) => {
  saveOrder({
    input: {
      id: event.id as string,
      store_id: useStore().value,
      status: event.status,
      scheduled_at: event.start.format('YYYY-MM-DD HH:mm:ss'),
      employee_id: event.resourceId as string,
    }
  }).then(() => {
    notifier.toastSuccess('Update order successfully')
  })
}

const { result: resultUsers, loading: loadingUsers } = useGetUsersListQuery(
  () => ({

    store_id: useStore().value,
  }),
  {
    debounce: 500,
  }
);

const { result: resultOrders, loading: loadingOrders, refetch: refetchOrders } = useGetOrdersListQuery(
  () => ({
    ...filters,
    store_id: useStore().value,
  }),
  {
    debounce: 500,
  }
);

const employees = computed(() => resultUsers.value?.getUsersList ?? []);

const orders = computed(() => resultOrders.value?.getOrdersList ?? []);
// const changeDate = (date: any) => {
//   console.log(date);
//   filters.scheduled_at = date
// }

</script>
