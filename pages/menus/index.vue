<template>
  <v-card :loading="loadingMenus">
    <v-card-text class="d-flex align-center justify-space-between">
      <v-btn rounded="pill" color="secondary" prepend-icon="mdi-reload"
        >Refresh</v-btn
      >
    </v-card-text>
    <v-card-text class="d-flex">
      <v-select
        :items="places"
        label="Place"
        clearable
        hide-details
        item-title="name"
        item-value="id"
        filter-keys="name"
        v-model="filters.place_id"
        :loading="loadingPlaces"
      />
      <v-text-field
        append-inner-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-card-text>
    <v-card-item>
      <v-switch
        label="Edit"
        v-model="editable"
        color="primary"
        inset
      ></v-switch>
    </v-card-item>
    <v-list>
      <v-list-group v-for="menu in menus">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <template #prepend>
              <v-btn icon variant="text" @click="onEditMenu(menu)">
                <v-avatar color="grey-lighten-3">
                  <v-fade-transition leave-absolute>
                    <v-img
                      v-if="!editable"
                      :src="(menu?.image as string)"
                      cover
                      :key="`imag-${menu.id}`"
                    />
                    <v-icon
                      :key="`icon-${menu.id}`"
                      v-else
                      icon="mdi-pencil-outline"
                    />
                  </v-fade-transition>
                </v-avatar>
              </v-btn>
            </template>
            <v-list-item-title class="font-weight-bold">{{
              menu.name
            }}</v-list-item-title>
            <v-list-item-subtitle>
              <span v-if="!menu.active" class="text-error">Inactive</span>
            </v-list-item-subtitle>
          </v-list-item>
        </template>

        <v-list-group v-for="item in menu.items">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props">
              <template #prepend>
                <v-btn icon variant="text" @click="onEditMenu(item)">
                  <v-avatar color="grey-lighten-3">
                    <v-fade-transition leave-absolute>
                      <v-img
                        v-if="!editable"
                        :src="(item?.image as string)"
                        cover
                        :key="`image-${item.id}`"
                      />
                      <v-icon
                        :key="`icon-${item.id}`"
                        v-else
                        icon="mdi-pencil-outline"
                      />
                    </v-fade-transition>
                  </v-avatar>
                </v-btn>
              </template>
              <v-list-item-title class="font-weight-bold">{{
                item.name
              }}</v-list-item-title>
              <v-list-item-subtitle>
                <span v-if="!item.active" class="text-error">Inactive</span>
              </v-list-item-subtitle>
            </v-list-item>
          </template>

          <v-list-item
            v-for="service in item.services"
            :to="{
              name: 'menus-services-id',
              params: {
                id: service.id,
              },
            }"
          >
            <template #prepend>
              <v-btn icon variant="text">
                <v-avatar color="grey-lighten-3">
                  <v-fade-transition leave-absolute>
                    <v-img
                      v-if="!editable"
                      :src="(service?.image as string)"
                      cover
                      :key="`image-${service.id}`"
                    />
                    <v-icon
                      :key="`icon-${service.id}`"
                      v-else
                      icon="mdi-pencil-outline"
                    />
                  </v-fade-transition>
                </v-avatar>
              </v-btn>
            </template>
            <v-list-item-title class="font-weight-bold">{{
              service.name
            }}</v-list-item-title>
            <v-list-item-subtitle>
              <span v-if="!service.active" class="text-error">Inactive</span>
            </v-list-item-subtitle>
            <template v-slot:append>
              <strong class="text-secondary">{{ service.price }}</strong>
            </template>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
    <v-dialog v-model="dialog" width="500">
      <v-card :title="'Menu'">
        <v-card-text>
          <v-select
            :items="menus"
            label="Parent menu"
            clearable
            item-title="name"
            item-value="id"
            v-model="(menu as TMenuItem).parent_id"
          />
          <v-text-field
            label="Name"
            v-model="menu.name"
            :rules="[(v) => !!v || 'Name is required']"
          />
          <v-text-field
            label="Description"
            v-model="menu.description"
            :rules="[(v) => !!v || 'Description is required']"
          />
          <v-switch
            label="Active"
            v-model="menu.active"
            color="primary"
            inset
          ></v-switch>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            block
            @click="onSaveMenu"
            :loading="loadingSaveMenu"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card-actions>
      <v-btn block color="primary" prepend-icon="mdi-plus" @click="onEditMenu()"
        >Add new menu</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router';
definePageMeta({
  keepalive: true,
});
const filters = reactive({
  place_id: useRouteQuery('place_id', null, { mode: 'push' }),
  search: '',
});

const filterVariables = computed(() => {
  return filterEmptyProperties({
    place_id: filters.place_id,
  });
});

const editable = ref(false);
const dialog = ref(false);
const menu = ref<any>({
  parent_id: null,
});

const {
  loading: loadingPlaces,
  result: resultPlaces,
  onResult,
} = useGetPlaceListQuery();

onResult((result) => {
  if (result?.data.placeList?.length) {
    filters.place_id = result?.data.placeList[0].id as any;
  }
});

const {
  loading: loadingMenus,
  result: resultMenus,
  refetch: refetchMenus,
} = useGetMenusQuery(
  () => filterVariables.value as any,
  () => ({
    debounce: 500,
    enabled: !!filterVariables.value.place_id,
  })
);

const { mutate: saveMenu, loading: loadingSaveMenu } = useSaveMenuMutation(
  () => ({
    variables: {
      input: {
        id: menu.value.id,
        name: menu.value.name,
        description: menu.value.description,
        active: menu.value.active,
        parent_id: menu.value.parent_id,
        place_id: menu.value.place_id,
      },
    },
  })
);

const places = computed(() => resultPlaces.value?.placeList ?? []);
const menus = computed(() => resultMenus.value?.menus ?? []);

const onEditMenu = (item: any = {}) => {
  dialog.value = true;
  menu.value = Object.assign({ place_id: filters.place_id }, item);
};
const onSaveMenu = () => {
  saveMenu()
    .then(() => refetchMenus())
    .then(() => (dialog.value = false))
    .catch((error) => console.error(error));
};
</script>
