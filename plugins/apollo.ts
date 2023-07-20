import { ApolloError, ApolloLink } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';
import { useStorage } from '@vueuse/core';
import { ApolloErrorOptions } from '@apollo/client/errors';
import { Notifier } from 'vuetify-notifier';
import { GraphQLError } from 'graphql';

declare module 'nuxt' {
  interface NuxtApp {
    $notifier: Notifier;
  }
}

export default defineNuxtPlugin(async (nuxtApp: any) => {
  const { clients } = useApollo();

  const authLink = setContext(async (_, { headers }) => {
    const token = useStorage('apollo:default.token', null);
    console.log('token', token.value);

    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token.value}`,
      },
    };
  });

  const httpLink = createUploadLink({
    uri: nuxtApp.$config.public.graphqlUrl,
  });
  const errorLink = onError((err) => {
    nuxtApp.callHook('apollo:error', err);
  });

  clients?.default.setLink(ApolloLink.from([authLink, errorLink, httpLink]));

  nuxtApp.hook(
    'apollo:error',
    (error: ApolloError) => {
      const { graphQLErrors, networkError } = error;
      if (graphQLErrors) {
        if (graphQLErrors[0].message === 'Unauthenticated.') {

          nuxtApp.$notifier.toastError('Your session has expired. Please login again.')
          return useApollo()
            .onLogout()
            .then(() => useRouter().replace('/auth/login'));
        }

        nuxtApp.$notifier.toastError(graphQLErrors.map(error => error.message).join('\n'))

      }

      if (networkError) {
        useNuxtApp().$notifier.alertError({
          title: 'Network Error',
          text: networkError.message
        })
      }
    }
  );
});
