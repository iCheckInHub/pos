<template>
  <v-layout class="bg-grey-lighten-5">
    <v-navigation-drawer permanent color="secondary">
      <v-toolbar
        title="POS System Management"
        color="secondary-lighten-2"
      ></v-toolbar>
      <v-list color="secondary" active-color="primary">
        <v-list-item
          prepend-icon="mdi-store"
          title="Places"
          exact
          :to="{ name: 'places' }"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-book"
          title="Orders"
          exact
          :to="{ name: 'orders' }"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-format-list-bulleted-square"
          title="Menus"
          exact
          :to="{ name: 'menus' }"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-group"
          title="Employees"
          exact
          :to="{ name: 'employees' }"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat extended>
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
          <v-breadcrumbs
            :items="['Foo', 'Bar', 'Fizz']"
            color="secondary"
            class="font-weight-bold"
          />
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
</script>

<style></style>
