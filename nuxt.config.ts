// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'iCheckin POS',
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: 'https://api.icheckin.test',
      graphqlUrl: 'https://api.icheckin.test/graphql?schema=pos',
    },
  },
  css: [
    '@mdi/font/css/materialdesignicons.css',
    '@/assets/css/main.scss',
    '@/assets/styles/vuetify/index.scss',
  ],
  modules: [
    '@vueuse/nuxt',
    [
      '@nuxtjs/apollo',
      {
        clients: {
          default: {
            httpEndpoint: 'https://api.icheckin.test/graphql?schema=pos',
          },
        },
      },
    ],
  ],

  build: {
    transpile: ['vuetify'],
  },
});
