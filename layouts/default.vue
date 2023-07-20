<template>
  <v-layout v-if="loading">
    <v-main>
      <v-container class="h-100">
        <v-row class="h-100" align="center" justify="center">
          <v-col cols="10" sm="9" md="8" lg="6" xl="4" xxl="3">
            <v-sheet>
              <v-progress-linear indeterminate color="yellow-darken-2"></v-progress-linear>
              <p class="text-center mt-5">Loading data...</p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
  <v-layout class="bg-grey-lighten-5" v-else>
    <v-navigation-drawer permanent color="secondary">
      <v-toolbar title="POS System Management" color="transparent" extended>
        <template #extension>
          <v-select class="mx-3" :items="stores" variant="filled" density="compact" label="Store" item-title="name"
            item-value="id" v-model="store" hide-details :loading="loadingStores">
            <template v-slot:chip="{ props, item }">
              <v-list-item class="px-0" lines="one" v-bind="props" :title="item?.raw?.name"></v-list-item>
            </template>

            <template v-slot:item="{ props, item }">
              <v-list-item v-bind="props" :prepend-avatar="item?.raw?.image" :title="item?.raw?.name"
                :subtitle="item?.raw?.address"></v-list-item>
            </template>
          </v-select>
        </template>
      </v-toolbar>

      <v-list active-color="primary">
        <v-list-item v-for="menu in menus" :prepend-icon="menu.icon" :title="menu.title" exact
          :to="menu.to"></v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat extended color="white">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/auth/login">
        <v-avatar variant="elevated" class="elevation-1" v-if="user.id">
          <v-img :src="user.avatar" cover />
        </v-avatar>
        <v-icon v-else icon="mdi-account-circle-outline" />
      </v-btn>

      <template v-slot:extension>
        <v-sheet color="grey-lighten-5" width="100%">
          <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']" color="secondary" class="font-weight-bold" />
        </v-sheet>
      </template>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
const user = useUser();

const loading = ref(true);

const { loading: loadingStores, result: resultStores } =
  useGetStoresListQuery();

const stores = computed(() => resultStores.value?.getStoresList ?? []);

const menus = [
  {
    icon: "mdi-view-dashboard",
    title: "Dashboard",
    to: { name: "index" },
  },
  {
    icon: "mdi-calendar",
    title: "Schedules",
    to: { name: "schedules" },
  },
  {
    icon: "mdi-book",
    title: "Orders",
    to: { name: "orders" },
  },
  {
    icon: "mdi-format-list-bulleted-square",
    title: "Menus",
    to: { name: "menus" },
  },
  {
    icon: "mdi-account-group",
    title: "Employees",
    to: { name: "employees" },
  },
]


const store = computed({
  get(): any {
    if (!stores.value.length) return null


    if (stores.value.some((store) => store.id === useStore().value)) {
      return useStore().value;
    }
    useStore().value = stores.value[0].id;
    return useStore().value
  },
  set(newValue: string) {
    useStore().value = newValue;
  },
});

watch(store, (value) => (loading.value = false));
</script>

<style>
</style>
