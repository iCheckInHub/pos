<template>
  <v-row>
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
      width="400"
    >
      <v-card variant="flat">
        <v-card-title>Order Histories</v-card-title>
        <v-timeline side="end" align="start" class="bg-white">
          <v-timeline-item dot-color="pink" size="small">
            <template v-slot:opposite>
              <strong>09:00</strong>
            </template>
            <div class="d-flex">
              <div>
                <strong>New Icon</strong>
                <div class="text-caption">Mobile App</div>
              </div>
            </div>
          </v-timeline-item>

          <v-timeline-item dot-color="teal-lighten-3" size="small">
            <template v-slot:opposite>
              <strong>09:10</strong>
            </template>
            <div class="d-flex">
              <div>
                <strong>Design Stand Up</strong>
                <div class="text-caption mb-2">Hangouts</div>
              </div>
            </div>
          </v-timeline-item>

          <v-timeline-item dot-color="pink" size="small">
            <template v-slot:opposite>
              <strong>09:30</strong>
            </template>
            <div class="d-flex">
              <div>
                <strong>Lunch break</strong>
              </div>
            </div>
          </v-timeline-item>

          <v-timeline-item dot-color="teal-lighten-3" size="small">
            <div class="d-flex">
              <strong class="mr-4">9-11am</strong>
              <div>
                <strong>Finish Home Screen</strong>
                <div class="text-caption">Web App</div>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-navigation-drawer>
    <v-col cols="8">
      <v-card variant="flat">
        <v-card-title class="d-flex align-end justify-space-between">
          <span class="text-secondary mr-2">No.</span>
          <strong>{{ order.no }}</strong>
          <v-spacer />
          <v-btn
            color="secondary"
            rounded="pill"
            size="small"
            variant="outlined"
            @click="drawer = !drawer"
            >View histories</v-btn
          >
        </v-card-title>
        <v-card-item>
          <v-row align="end" justify="space-between">
            <v-col>
              <strong class="text-secondary">Place</strong>
              <p>{{ order?.place?.name }}</p>
            </v-col>
            <v-col>
              <strong class="text-secondary">Datetime</strong>
              <p>
                {{ useDateFormat(order.created_at, 'YYYY-MM-DD HH:mm').value }}
              </p>
            </v-col>
            <v-col class="text-right">
              <dd>
                <strong
                  class="text-capitalize"
                  :class="useColorStatus(order.status, 'text')"
                  >{{ order.status }}</strong
                >
              </dd>
            </v-col>
          </v-row>
        </v-card-item>
        <v-card-text class="d-flex align-end justify-space-between mt-10">
          <p class="font-weight-bold text-secondary">Orders</p>
          <v-chip color="warning" variant="outlined" label>Unpaid</v-chip>
        </v-card-text>
        <v-table>
          <tbody>
            <tr v-for="item in order.items">
              <td class="px-0">
                <v-list-item>
                  <v-list-item-title class="font-weight-bold">{{
                    item.service.name
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    item.service.name
                  }}</v-list-item-subtitle>
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
              <td
                class="font-weight-bold text-secondary text-right"
                colspan="2"
              >
                {{ order?.total?.toFixed(2) }}
              </td>
            </tr>
            <tr>
              <td class="font-weight-bold text-secondary">Promotion</td>
              <td
                class="font-weight-bold text-secondary text-right"
                colspan="2"
              >
                0
              </td>
            </tr>
            <tr>
              <td class="font-weight-bold text-h6">Total</td>
              <td class="font-weight-bold text-h6 text-right" colspan="2">
                {{ order?.total?.toFixed(2) }}
              </td>
            </tr>
          </tfoot>
        </v-table>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card variant="flat">
        <p class="font-weight-bold text-secondary">Customer</p>
        <v-list-item
          class="px-0"
          :prepend-avatar="(order?.user?.avatar as string)"
          :title="order?.user?.name"
        ></v-list-item>
        <v-list-subheader class="font-weight-bold text-secondary">
          Note
        </v-list-subheader>
        <v-card-text class="pl-0 py-0">
          <v-textarea
            placeholder="Enter note"
            append-inner-icon="mdi-send"
          ></v-textarea>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useRouteParams } from '@vueuse/router';
const drawer = ref(false);

const { result } = useGetOrderQuery({
  id: useRouteParams('id') as any,
});

const order = computed(() => result.value?.order || ({} as TOrder));

const quantity = computed(() => {
  return order.value?.items?.length
    ? order.value?.items.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0)
    : 0;
});
</script>
