// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'iCheckin POS',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
          crossorigin: '',
        },
      ],
      script: [
        {
          src: 'http://localhost:8098',
        }
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiUrl: 'http://api.poscheckin.test',
      graphqlUrl: 'http://api.poscheckin.test/graphql',
    },
  },

  css: [
    '@mdi/font/css/materialdesignicons.css',
    '@/assets/styles/vuetify/index.scss',
    '@/assets/css/main.scss',
  ],

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/apollo',
    'vuetify-notifier/nuxt',
  ],

  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint: 'http://api.poscheckin.test/graphql',
        tokenStorage: 'localStorage',
      },
    },
  },

  notifier: {
    default: {
      defaultColor: "red"
    },
  },

  build: {
    transpile: ['vuetify'],
  },

  alias: {
    '@vuetify-scheduler': 'D:/projects/vuetify-scheduler/src'
  },

  vite: {
    server: {
      fs: {
        allow: ['../vuetify-scheduler', '../vue-draggify']
      }
    }
  },

  devtools: {
    enabled: true
  }
});
