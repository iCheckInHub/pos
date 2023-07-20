<template>
  <v-card>
    <v-row>
      <v-col cols="8">
        <v-card variant="flat" :loading="loading">
          <v-toolbar>
            <v-toolbar-title>
              <span class="text-secondary mr-2">No.</span>
              <strong>{{ order.no }}</strong>
            </v-toolbar-title>
            <v-spacer />
          </v-toolbar>

          <v-card-item>
            <v-row align="end" justify="space-between">
              <v-col>
                <v-text-field :model-value="order?.customer?.name || 'Guest'" label="Customer" variant="plain" readonly>
                  <template #label>
                    <strong>Customer</strong>
                  </template>
                </v-text-field>
              </v-col>
              <v-col>
                <v-text-field :model-value="order?.store?.name" variant="plain" readonly><template #label>
                    <strong>Store</strong>
                  </template></v-text-field>
              </v-col>
              <v-col>
                <v-text-field :model-value="useDateFormat(order.created_at, 'YYYY-MM-DD HH:mm').value
                  " label="Datetime" variant="plain" readonly>
                  <template #label>
                    <strong>Datetime</strong>
                  </template></v-text-field>
              </v-col>
            </v-row>
          </v-card-item>
          <v-card-text>
            <v-row no-gutters justify="space-between" align="end">
              <p class="font-weight-bold text-secondary">Orders</p>

              <v-sheet width="150">
                <v-select :loading="loadingChangeStatus" :items="['pending', 'confirmed']" v-model="order.status"
                  variant="plain" hide-details @update:model-value="updateStatus">
                  <template #label>
                    <strong>Status</strong>
                  </template>
                  <template #selection="{ item }">
                    <span class="text-capitalize" :class="useColorStatus(order.status, 'text')">
                      {{ order.status }}
                    </span>
                  </template>
                </v-select>
              </v-sheet>
            </v-row>
          </v-card-text>

          <v-table>
            <tbody>
              <tr v-for="item in order.items">
                <td class="px-0">
                  <v-list-item>
                    <v-list-item-title class="font-weight-bold">{{
                      item.data?.service?.name
                    }}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{
                        item.data?.options
                          ?.map((option) => option.name)
                          .join(', ')
                      }}
                    </v-list-item-subtitle>
                  </v-list-item>
                </td>
                <td class="font-weight-bold">
                  {{ item.price }} x
                  <span class="text-primary">{{ item.quantity }}</span>
                </td>
                <td class="font-weight-bold text-right">
                  {{ (item.price * item.quantity).toFixed(2) }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="font-weight-bold text-secondary">
                  Subtotal ({{ quantity }}) items
                </td>
                <td class="font-weight-bold text-secondary text-right" colspan="2">
                  {{ order?.total?.toFixed(2) }}
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold text-secondary">Promotion</td>
                <td class="font-weight-bold text-secondary text-right" colspan="2">
                  0
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold text-h6">Total</td>
                <td class="font-weight-bold text-h6 text-right" colspan="2">
                  <v-chip color="warning" variant="outlined" density="compact" class="mr-2">Unpaid</v-chip>{{
                    order?.total?.toFixed(2) }}
                </td>
              </tr>
            </tfoot>
          </v-table>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-sheet class="pt-4">
          <v-textarea placeholder="Enter note" variant="underlined" dirty rows="1" auto-grow v-model="note" clearable>
            <template #label>
              <strong>Note</strong>
            </template>
            <template #append>
              <v-btn :disabled="!note" color="primary" variant="text" icon="mdi-send"></v-btn>
            </template>
          </v-textarea>
        </v-sheet>

        <!-- <strong class="text-secondary">Histories</strong>
        <v-sheet>
          <v-timeline side="end" align="start" density="compact">
            <v-timeline-item size="x-small" dot-color="secondary">
              <div class="d-flex">
                <strong class="me-4">16:30</strong>
                <div>
                  <strong>Design Stand Up</strong>
                  <div class="text-caption mb-2">Hangouts</div>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-sheet> -->
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
const { params } = useRoute();

const order = ref<TOrder>({} as TOrder);

const { loading, onResult } = useGetOrderQuery(
  {
    id: params.id as string,
    store_id: useStore().value,
  },
  () => ({
    enabled: !!params.id,
  })
);

onResult(({ data }) => (order.value = { ...data?.getOrder } as any));

const note = ref('');

const quantity = computed(() => {
  return order.value?.items?.length
    ? order.value?.items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
    : 0;
});

const { mutate: changeStatus, loading: loadingChangeStatus } = await useSaveOrderMutation();

const updateStatus = async (status: string) => {
  changeStatus({
    input: {
      id: order.value.id,
      store_id: useStore().value,
      status: status
    }
  }).then(() => {

    useNotifier().toastSuccess('Update status successfully')
  })
};
</script>
