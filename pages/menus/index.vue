<template>
  <v-card :loading="loadingMenus">
    <v-card-text>
      <v-row dense>
        <v-col>
          <v-btn rounded="pill" color="secondary" prepend-icon="mdi-reload"
            >Refresh</v-btn
          >
        </v-col>
        <v-col>
          <v-text-field
            append-inner-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            density="compact"
            variant="outlined"
          />
        </v-col>
      </v-row>

      <v-card color="white" class="mt-5 px-0" variant="flat">
        <v-card-title
          class="d-flex justify-space-between align-center bg-header"
          >Menus
          <v-spacer />

          <v-btn color="primary" prepend-icon="mdi-plus" @click="onEditMenu()"
            >new menu</v-btn
          >
        </v-card-title>
        <v-list>
          <template v-for="menu in menus">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-list-item v-bind="props">
                  <template #prepend>
                    <v-btn
                      icon
                      variant="text"
                      v-if="isHovering"
                      @click="onEditMenu(menu)"
                    >
                      <v-avatar icon="mdi-pencil" color="primary"></v-avatar>
                    </v-btn>
                    <v-btn icon variant="text" v-else>
                      <v-avatar
                        :icon="!menu?.image ? 'mdi-image' : undefined"
                        :image="menu?.image ? menu?.image : undefined"
                        color="grey-lighten-3"
                      ></v-avatar>
                    </v-btn>
                  </template>
                  <v-list-item-title>{{ menu.name }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip v-if="!menu.active" color="red">Inactive</v-chip>
                  </v-list-item-subtitle>
                  <template #append>
                    <v-btn
                      color="primary"
                      icon
                      density="compact"
                      @click="onEditMenu({ parent_id: menu.id })"
                    >
                      <v-icon icon="mdi-playlist-plus" />
                      <v-tooltip activator="parent" location="top"
                        >Add sub menu</v-tooltip
                      >
                    </v-btn>
                  </template>
                </v-list-item>
              </template>
            </v-hover>

            <template v-for="item in menu.items">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-list-item class="ml-10" v-bind="props">
                    <template #prepend>
                      <v-btn
                        icon
                        variant="text"
                        v-if="isHovering"
                        @click="onEditMenu({ ...item, parent_id: menu.id })"
                      >
                        <v-avatar
                          icon="mdi-pencil"
                          color="grey-lighten-3"
                        ></v-avatar>
                      </v-btn>
                      <v-btn icon variant="text" v-else>
                        <v-avatar
                          :icon="!item?.image ? 'mdi-image' : undefined"
                          :image="item?.image ? item?.image : undefined"
                          color="grey-lighten-3"
                        ></v-avatar>
                      </v-btn>
                    </template>
                    <template #append>
                      <v-btn
                        color="primary"
                        icon
                        density="compact"
                        :to="{
                          name: 'menus-services-id',
                          params: {
                            id: 'new',
                          },
                          query: {
                            menu_id: item.id,
                          },
                        }"
                      >
                        <v-icon icon="mdi-playlist-plus" />
                        <v-tooltip activator="parent" location="top"
                          >Add service</v-tooltip
                        >
                      </v-btn>
                    </template>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle>
                      <v-chip v-if="!item.active" color="red">Inactive</v-chip>
                    </v-list-item-subtitle>
                  </v-list-item>
                </template>
              </v-hover>
              <template v-for="service in item.services">
                <v-hover>
                  <template v-slot:default="{ isHovering, props }">
                    <v-list-item v-bind="props" class="ml-16 pl-8">
                      <template #prepend>
                        <v-btn
                          icon
                          variant="text"
                          v-if="isHovering"
                          :to="{
                            name: 'menus-services-id',
                            params: {
                              id: service.id,
                            },
                          }"
                        >
                          <v-avatar
                            icon="mdi-pencil"
                            color="grey-lighten-3"
                          ></v-avatar>
                        </v-btn>
                        <v-btn icon variant="text" v-else>
                          <v-avatar
                            :icon="!service?.image ? 'mdi-image' : undefined"
                            :image="service?.image ? service?.image : undefined"
                            color="grey-lighten-3"
                          ></v-avatar>
                        </v-btn>
                      </template>
                      <v-list-item-title class="font-weight-bold">{{
                        service.name
                      }}</v-list-item-title>
                      <v-list-item-subtitle>
                        <v-chip v-if="!service.active" color="red"
                          >Inactive</v-chip
                        >
                      </v-list-item-subtitle>
                      <template v-slot:append>
                        <strong class="text-secondary">{{
                          service.price
                        }}</strong>
                      </template>
                    </v-list-item>
                  </template>
                </v-hover>
              </template>
            </template>
          </template>

          <!-- <v-list-group v-for="menu in menus" fluid>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="px-2">
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
          </v-list-group> -->
        </v-list>
      </v-card>
    </v-card-text>
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
          <v-spacer />
          <v-btn @click="dialog = false">Close</v-btn>
          <v-btn color="primary" @click="onSaveMenu" :loading="loadingSaveMenu"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script lang="ts" setup>
definePageMeta({
  keepalive: true,
});
const filters = reactive({
  search: '',
});

const filterVariables = computed(() => {
  return filterEmptyProperties({
    store_id: useStore().value,
  });
});

const editable = ref(false);
const dialog = ref(false);
const menu = ref<any>({
  parent_id: null,
});

const {
  loading: loadingMenus,
  result: resultMenus,
  refetch: refetchMenus,
} = useGetMenusQuery(
  () => filterVariables.value as any,
  () => ({
    debounce: 500,
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
        store_id: useStore().value,
      },
    },
  })
);

const menus = computed(() => resultMenus.value?.getMenus ?? []);

const onEditMenu = (item: any = {}) => {
  dialog.value = true;
  menu.value = { ...item };
};
const onSaveMenu = () => {
  saveMenu()
    .then(() => refetchMenus())
    .then(() => (dialog.value = false))
    .catch((error) => console.error(error));
};
</script>
