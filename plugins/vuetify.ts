import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import * as labs from 'vuetify/labs/components';

const main: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#00c9ff',
    'primary-lighten-2': '#00a5ff',
    'primary-lighten-1': '#00b7ff',
    'primary-darken-1': '#00a0cc',
    'primary-darken-2': '#007799',
    secondary: '#637f8d',
    'secondary-lighten-1': '#7da1b3',
    'secondary-lighten-2': '#98c3d9',
    'secondary-darken-1': '#3f515a',
    'secondary-darken-2': '#2d3a40',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    // 'on-surface': '#ffffff',
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createVuetify({
      ssr: false,
      components: {
        ...components,
        ...labs,
      },
      directives,
      defaults: {
        global: {},
        VCard: {
          rounded: 0,
          variant: 'flat',
        },
        VSheet: {
          color: 'transparent',
        },
        VToolbar: {
          color: 'transparent',
        },
        VDataTable: {
          fixedHeader: true,
          noDataText: 'Results not found',
        },
      },
      theme: {
        defaultTheme: 'main',
        variations: {
          colors: ['primary', 'secondary'],
          lighten: 2,
          darken: 2,
        },
        themes: {
          main,
          light: {
            colors: {
              // background: '#fafafa',
              // surface: '#FFFFFF',
              primary: '#00c9ff',
              secondary: '#637f8d',
              error: '#B00020',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FB8C00',
            },
          },
          dark: {
            colors: {
              background: '#fafafa',
              surface: '#ffffff',
              primary: '#00c9ff',
              'primary-lighten-2': '#00a5ff',
              'primary-lighten-1': '#00b7ff',
              'primary-darken-1': '#00a0cc',
              'primary-darken-2': '#007799',
              secondary: '#637f8d',
              'secondary-lighten-1': '#7da1b3',
              'secondary-lighten-2': '#98c3d9',
              'secondary-darken-1': '#3f515a',
              'secondary-darken-2': '#2d3a40',
              error: '#B00020',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FB8C00',
              'on-surface': '#ffffff',
            },
          },
        },
      },
    })
  );
});
