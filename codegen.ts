import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://api.poscheckin.test/graphql',
  documents: 'graphql/**/*.gql',
  generates: {
    './types/graphql.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        noExport: true,
        enumValues: true,
        skipTypename: true,
        typesPrefix: 'T',
      },
    },
    './utils/graphql.ts': {
      plugins: ['typescript-vue-apollo'],
      config: {
        withCompositionFunctions: true,
        skipTypename: true,
        addDocBlocks: true,
        typesPrefix: 'T',
        vueApolloComposableImportFrom: '@vue/apollo-composable',
        vueCompositionApiImportFrom: 'vue',
      },
    },
  },
};

export default config;
