<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <v-card class="d-block" height="100%">
      <v-toolbar color="transparent">
        <v-app-bar-nav-icon
          :icon="'mdi-arrow-left'"
          class="text-secondary"
          @click="onClose"
        />
        <v-toolbar-title>
          {{ service.name }}
        </v-toolbar-title>
      </v-toolbar>
      <v-img :src="service.image" :aspect-ratio="16 / 9" cover> </v-img>
      <v-card-title class="text-body-1 font-weight-bold">
        {{ service.name }}
      </v-card-title>
      <v-card-subtitle class="text-wrap text-caption">
        {{ service.description }}
      </v-card-subtitle>
      <v-list lines="one" subheader>
        <template v-for="(extra, keyExtra) in service.extras">
          <v-list-group no-action fluid>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="bg-grey-lighten-4">
                <v-list-item-title class="font-weight-bold">{{
                  extra.name
                }}</v-list-item-title>
              </v-list-item>
            </template>
            <template
              v-for="(option, keyOption) in extra.options"
              :key="keyOption"
            >
              <v-list-item
                :title="option.name"
                class="px-0"
                lines="one"
                @click="onOptionClick(extra, option)"
              >
                <template #prepend>
                  <v-icon v-if="!extra.multiple">
                    {{
                      service.optionIds?.includes(option.id as string)
                        ? 'mdi-radiobox-marked'
                        : 'mdi-radiobox-blank'
                    }}
                  </v-icon>

                  <v-icon v-else>
                    {{
                      service.optionIds?.includes(option.id as string)
                        ? 'mdi-checkbox-marked'
                        : 'mdi-checkbox-blank-outline'
                    }}
                  </v-icon>
                </template>
                <template #append>
                  <span class="text-secondary-darken-2 text-caption">{{
                    option.price > 0 ? `+${option.price}` : ''
                  }}</span>
                </template>
              </v-list-item>
            </template>
          </v-list-group>
        </template>
      </v-list>

      <v-footer
        style="position: fixed; bottom: 0; left: 0; right: 0"
        class="d-block pa-0"
        color="transparent"
      >
        <v-divider class="mb-1" />
        <v-row align="center" justify="center" no-gutters class="px-3 py-2">
          <v-col cols="4"
            ><v-btn-group :density="'compact'" rounded="pill" variant="text">
              <v-btn
                @click="
                  (service.quantity as number) > 1
                    ? (service.quantity as number)--
                    : 1
                "
                icon="mdi-minus-circle-outline"
              ></v-btn>
              <v-btn size="x-small" class="text-subtitle-1">{{
                service.quantity
              }}</v-btn>
              <v-btn
                icon="mdi-plus-circle"
                color="secondary"
                @click="(service.quantity as number)++"
              ></v-btn> </v-btn-group
          ></v-col>
          <v-col cols="4" class="text-center d-block"
            ><v-btn
              @click="onAddToCart"
              color="primary"
              icon="mdi-cart-plus"
              variant="elevated"
              elevation="5"
              class="mt-n9"
              size="large"
            ></v-btn>
            <div class="text-secondary">Add to cart</div></v-col
          >
          <v-col
            cols="4"
            class="text-right text-h6 font-weight-bold text-primary align-center"
            ><v-icon icon="mdi-currency-usd" /> {{ totalPrice }}</v-col
          >
        </v-row>
      </v-footer>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
const dialog = ref(false);
const service = ref({} as TMenuServiceExtends);

const onOpen = async (item: any) => {
  dialog.value = true;

  useGetServiceQuery({
    id: item.id,
  }).onResult(({ data }) => {
    service.value = {
      ...data?.service,
      ...{ quantity: 1, optionIds: [] },
    } as any;
  });
};

const onClose = () => {
  dialog.value = false;
  Object.assign(service.value, {});
};

defineExpose({
  onOpen,
});

const onOptionClick = (
  extra: TMenuServiceExtra,
  option: TMenuServiceExtraOption
) => {
  if (extra.multiple) {
    service.value.optionIds = useToogleItem(service.value.optionIds, option.id);
  } else {
    const extraOptions = extra.options?.map((o) => o.id) || [];
    service.value.optionIds =
      service.value.optionIds?.filter(
        (id: string) => !extraOptions.includes(id)
      ) || [];
    service.value.optionIds.push(option.id as string);
  }
  console.log(service.value.optionIds);
};
const { params } = useRoute();
const cart = useCart(params.id as string);

const onAddToCart = () => {
  console.log('Add to cart');
  let item = {
    id: service.value.id as string,
    quantity: service.value.quantity || 1,
    optionIds: service.value.optionIds || [],
  };
  cart.value.items.push(item);
  onClose();
};

const totalPrice = computed(() => {
  const total =
    service.value.extras
      ?.map((extra: TMenuServiceExtra) => extra.options)
      .flat()
      .reduce((acc: number, option: TMenuServiceExtraOption) => {
        if (service.value.optionIds?.includes(option?.id as string)) {
          return acc + (option?.price || 0);
        }
        return acc;
      }, service.value.price || 0) || 0;
  return (total * (service.value.quantity || 1)).toFixed(2);
});
</script>
