import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type ReactiveFunction<TParam> = () => TParam;

export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    id
    name
    email
    avatar
    token
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLoginMutation({
 *   variables: {
 *     username: // value for 'username'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(options: VueApolloComposable.UseMutationOptions<TLoginMutation, TLoginMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TLoginMutation, TLoginMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<TLoginMutation, TLoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<TLoginMutation, TLoginMutationVariables>;
export const SaveMenuDocument = gql`
    mutation saveMenu($input: MenuInput!) {
  saveMenu(input: $input) {
    id
    name
    description
    image
    active
  }
}
    `;

/**
 * __useSaveMenuMutation__
 *
 * To run a mutation, you first call `useSaveMenuMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveMenuMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveMenuMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveMenuMutation(options: VueApolloComposable.UseMutationOptions<TSaveMenuMutation, TSaveMenuMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TSaveMenuMutation, TSaveMenuMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<TSaveMenuMutation, TSaveMenuMutationVariables>(SaveMenuDocument, options);
}
export type SaveMenuMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<TSaveMenuMutation, TSaveMenuMutationVariables>;
export const SaveMenuServiceDocument = gql`
    mutation saveMenuService($input: MenuServiceInput!) {
  saveMenuService(input: $input) {
    id
  }
}
    `;

/**
 * __useSaveMenuServiceMutation__
 *
 * To run a mutation, you first call `useSaveMenuServiceMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveMenuServiceMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveMenuServiceMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveMenuServiceMutation(options: VueApolloComposable.UseMutationOptions<TSaveMenuServiceMutation, TSaveMenuServiceMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TSaveMenuServiceMutation, TSaveMenuServiceMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<TSaveMenuServiceMutation, TSaveMenuServiceMutationVariables>(SaveMenuServiceDocument, options);
}
export type SaveMenuServiceMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<TSaveMenuServiceMutation, TSaveMenuServiceMutationVariables>;
export const SaveMenuServiceExtraDocument = gql`
    mutation saveMenuServiceExtra($input: MenuServiceExtraInput!) {
  saveMenuServiceExtra(input: $input) {
    id
  }
}
    `;

/**
 * __useSaveMenuServiceExtraMutation__
 *
 * To run a mutation, you first call `useSaveMenuServiceExtraMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveMenuServiceExtraMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveMenuServiceExtraMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveMenuServiceExtraMutation(options: VueApolloComposable.UseMutationOptions<TSaveMenuServiceExtraMutation, TSaveMenuServiceExtraMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TSaveMenuServiceExtraMutation, TSaveMenuServiceExtraMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<TSaveMenuServiceExtraMutation, TSaveMenuServiceExtraMutationVariables>(SaveMenuServiceExtraDocument, options);
}
export type SaveMenuServiceExtraMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<TSaveMenuServiceExtraMutation, TSaveMenuServiceExtraMutationVariables>;
export const SaveMenuServiceExtraOptionDocument = gql`
    mutation saveMenuServiceExtraOption($input: MenuServiceExtraOptionInput!) {
  saveMenuServiceExtraOption(input: $input) {
    id
  }
}
    `;

/**
 * __useSaveMenuServiceExtraOptionMutation__
 *
 * To run a mutation, you first call `useSaveMenuServiceExtraOptionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveMenuServiceExtraOptionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveMenuServiceExtraOptionMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveMenuServiceExtraOptionMutation(options: VueApolloComposable.UseMutationOptions<TSaveMenuServiceExtraOptionMutation, TSaveMenuServiceExtraOptionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TSaveMenuServiceExtraOptionMutation, TSaveMenuServiceExtraOptionMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<TSaveMenuServiceExtraOptionMutation, TSaveMenuServiceExtraOptionMutationVariables>(SaveMenuServiceExtraOptionDocument, options);
}
export type SaveMenuServiceExtraOptionMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<TSaveMenuServiceExtraOptionMutation, TSaveMenuServiceExtraOptionMutationVariables>;
export const DeleteMenuServiceExtraDocument = gql`
    mutation deleteMenuServiceExtra($input: MenuServiceExtraDeleteInput!) {
  deleteMenuServiceExtra(input: $input) {
    id
  }
}
    `;

/**
 * __useDeleteMenuServiceExtraMutation__
 *
 * To run a mutation, you first call `useDeleteMenuServiceExtraMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMenuServiceExtraMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteMenuServiceExtraMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMenuServiceExtraMutation(options: VueApolloComposable.UseMutationOptions<TDeleteMenuServiceExtraMutation, TDeleteMenuServiceExtraMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TDeleteMenuServiceExtraMutation, TDeleteMenuServiceExtraMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<TDeleteMenuServiceExtraMutation, TDeleteMenuServiceExtraMutationVariables>(DeleteMenuServiceExtraDocument, options);
}
export type DeleteMenuServiceExtraMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<TDeleteMenuServiceExtraMutation, TDeleteMenuServiceExtraMutationVariables>;
export const DeleteMenuServiceExtraOptionDocument = gql`
    mutation deleteMenuServiceExtraOption($input: MenuServiceExtraOptionDeleteInput!) {
  deleteMenuServiceExtraOption(input: $input) {
    id
  }
}
    `;

/**
 * __useDeleteMenuServiceExtraOptionMutation__
 *
 * To run a mutation, you first call `useDeleteMenuServiceExtraOptionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMenuServiceExtraOptionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteMenuServiceExtraOptionMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMenuServiceExtraOptionMutation(options: VueApolloComposable.UseMutationOptions<TDeleteMenuServiceExtraOptionMutation, TDeleteMenuServiceExtraOptionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TDeleteMenuServiceExtraOptionMutation, TDeleteMenuServiceExtraOptionMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<TDeleteMenuServiceExtraOptionMutation, TDeleteMenuServiceExtraOptionMutationVariables>(DeleteMenuServiceExtraOptionDocument, options);
}
export type DeleteMenuServiceExtraOptionMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<TDeleteMenuServiceExtraOptionMutation, TDeleteMenuServiceExtraOptionMutationVariables>;
export const SaveUserDocument = gql`
    mutation saveUser($input: UserInput!) {
  saveUser(input: $input) {
    id
  }
}
    `;

/**
 * __useSaveUserMutation__
 *
 * To run a mutation, you first call `useSaveUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveUserMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveUserMutation(options: VueApolloComposable.UseMutationOptions<TSaveUserMutation, TSaveUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TSaveUserMutation, TSaveUserMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<TSaveUserMutation, TSaveUserMutationVariables>(SaveUserDocument, options);
}
export type SaveUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<TSaveUserMutation, TSaveUserMutationVariables>;
export const SaveOrderDocument = gql`
    mutation saveOrder($input: OrderInput!) {
  saveOrder(input: $input) {
    id
    scheduled_at
    employee {
      id
      name
    }
  }
}
    `;

/**
 * __useSaveOrderMutation__
 *
 * To run a mutation, you first call `useSaveOrderMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveOrderMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveOrderMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveOrderMutation(options: VueApolloComposable.UseMutationOptions<TSaveOrderMutation, TSaveOrderMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TSaveOrderMutation, TSaveOrderMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<TSaveOrderMutation, TSaveOrderMutationVariables>(SaveOrderDocument, options);
}
export type SaveOrderMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<TSaveOrderMutation, TSaveOrderMutationVariables>;
export const GetProfileDocument = gql`
    query getProfile {
  me {
    id
    name
    email
    avatar
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a Vue component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetProfileQuery();
 */
export function useGetProfileQuery(options: VueApolloComposable.UseQueryOptions<TGetProfileQuery, TGetProfileQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetProfileQuery, TGetProfileQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetProfileQuery, TGetProfileQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetProfileQuery, TGetProfileQueryVariables>(GetProfileDocument, {}, options);
}
export function useGetProfileLazyQuery(options: VueApolloComposable.UseQueryOptions<TGetProfileQuery, TGetProfileQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetProfileQuery, TGetProfileQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetProfileQuery, TGetProfileQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetProfileQuery, TGetProfileQueryVariables>(GetProfileDocument, {}, options);
}
export type GetProfileQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetProfileQuery, TGetProfileQueryVariables>;
export const GetStoresListDocument = gql`
    query getStoresList {
  getStoresList {
    id
    name
    address
    image
  }
}
    `;

/**
 * __useGetStoresListQuery__
 *
 * To run a query within a Vue component, call `useGetStoresListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoresListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetStoresListQuery();
 */
export function useGetStoresListQuery(options: VueApolloComposable.UseQueryOptions<TGetStoresListQuery, TGetStoresListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetStoresListQuery, TGetStoresListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetStoresListQuery, TGetStoresListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetStoresListQuery, TGetStoresListQueryVariables>(GetStoresListDocument, {}, options);
}
export function useGetStoresListLazyQuery(options: VueApolloComposable.UseQueryOptions<TGetStoresListQuery, TGetStoresListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetStoresListQuery, TGetStoresListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetStoresListQuery, TGetStoresListQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetStoresListQuery, TGetStoresListQueryVariables>(GetStoresListDocument, {}, options);
}
export type GetStoresListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetStoresListQuery, TGetStoresListQueryVariables>;
export const GetStoreDocument = gql`
    query getStore($id: ID!) {
  getStore(id: $id) {
    id
    name
    description
    phone
    image
    cover
    address
    hours
  }
}
    `;

/**
 * __useGetStoreQuery__
 *
 * To run a query within a Vue component, call `useGetStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoreQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetStoreQuery({
 *   id: // value for 'id'
 * });
 */
export function useGetStoreQuery(variables: TGetStoreQueryVariables | VueCompositionApi.Ref<TGetStoreQueryVariables> | ReactiveFunction<TGetStoreQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetStoreQuery, TGetStoreQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetStoreQuery, TGetStoreQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetStoreQuery, TGetStoreQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetStoreQuery, TGetStoreQueryVariables>(GetStoreDocument, variables, options);
}
export function useGetStoreLazyQuery(variables: TGetStoreQueryVariables | VueCompositionApi.Ref<TGetStoreQueryVariables> | ReactiveFunction<TGetStoreQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetStoreQuery, TGetStoreQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetStoreQuery, TGetStoreQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetStoreQuery, TGetStoreQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetStoreQuery, TGetStoreQueryVariables>(GetStoreDocument, variables, options);
}
export type GetStoreQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetStoreQuery, TGetStoreQueryVariables>;
export const GetOrdersDocument = gql`
    query getOrders($search: String, $store_id: ID!, $status: OrderStatus, $page: Int, $orderBy: [QueryGetOrdersOrderByOrderByClause!]) {
  getOrders(
    store_id: $store_id
    page: $page
    orderBy: $orderBy
    status: $status
    search: $search
  ) {
    data {
      id
      no
      status
      total
      created_at
      user {
        id
        name
        avatar
        phone
      }
    }
    paginatorInfo {
      count
      currentPage
      firstItem
      hasMorePages
      lastItem
      lastPage
      perPage
      total
    }
  }
}
    `;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a Vue component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetOrdersQuery({
 *   search: // value for 'search'
 *   store_id: // value for 'store_id'
 *   status: // value for 'status'
 *   page: // value for 'page'
 *   orderBy: // value for 'orderBy'
 * });
 */
export function useGetOrdersQuery(variables: TGetOrdersQueryVariables | VueCompositionApi.Ref<TGetOrdersQueryVariables> | ReactiveFunction<TGetOrdersQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetOrdersQuery, TGetOrdersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetOrdersQuery, TGetOrdersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetOrdersQuery, TGetOrdersQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetOrdersQuery, TGetOrdersQueryVariables>(GetOrdersDocument, variables, options);
}
export function useGetOrdersLazyQuery(variables: TGetOrdersQueryVariables | VueCompositionApi.Ref<TGetOrdersQueryVariables> | ReactiveFunction<TGetOrdersQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetOrdersQuery, TGetOrdersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetOrdersQuery, TGetOrdersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetOrdersQuery, TGetOrdersQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetOrdersQuery, TGetOrdersQueryVariables>(GetOrdersDocument, variables, options);
}
export type GetOrdersQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetOrdersQuery, TGetOrdersQueryVariables>;
export const GetOrderDocument = gql`
    query getOrder($id: ID!, $store_id: ID!) {
  getOrder(id: $id, store_id: $store_id) {
    id
    status
    no
    total
    duration
    user {
      id
      name
      avatar
      phone
    }
    store {
      id
      name
    }
    items {
      id
      quantity
      price
      data {
        service {
          id
          name
          image
        }
        options {
          id
          name
          price
        }
      }
    }
    created_at
  }
}
    `;

/**
 * __useGetOrderQuery__
 *
 * To run a query within a Vue component, call `useGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetOrderQuery({
 *   id: // value for 'id'
 *   store_id: // value for 'store_id'
 * });
 */
export function useGetOrderQuery(variables: TGetOrderQueryVariables | VueCompositionApi.Ref<TGetOrderQueryVariables> | ReactiveFunction<TGetOrderQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetOrderQuery, TGetOrderQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetOrderQuery, TGetOrderQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetOrderQuery, TGetOrderQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetOrderQuery, TGetOrderQueryVariables>(GetOrderDocument, variables, options);
}
export function useGetOrderLazyQuery(variables: TGetOrderQueryVariables | VueCompositionApi.Ref<TGetOrderQueryVariables> | ReactiveFunction<TGetOrderQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetOrderQuery, TGetOrderQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetOrderQuery, TGetOrderQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetOrderQuery, TGetOrderQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetOrderQuery, TGetOrderQueryVariables>(GetOrderDocument, variables, options);
}
export type GetOrderQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetOrderQuery, TGetOrderQueryVariables>;
export const GetMenusDocument = gql`
    query getMenus($store_id: ID!) {
  getMenus(store_id: $store_id) {
    id
    name
    image
    active
    items {
      id
      name
      image
      active
      services {
        id
        name
        image
        price
        active
      }
    }
  }
}
    `;

/**
 * __useGetMenusQuery__
 *
 * To run a query within a Vue component, call `useGetMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenusQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetMenusQuery({
 *   store_id: // value for 'store_id'
 * });
 */
export function useGetMenusQuery(variables: TGetMenusQueryVariables | VueCompositionApi.Ref<TGetMenusQueryVariables> | ReactiveFunction<TGetMenusQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetMenusQuery, TGetMenusQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetMenusQuery, TGetMenusQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetMenusQuery, TGetMenusQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetMenusQuery, TGetMenusQueryVariables>(GetMenusDocument, variables, options);
}
export function useGetMenusLazyQuery(variables: TGetMenusQueryVariables | VueCompositionApi.Ref<TGetMenusQueryVariables> | ReactiveFunction<TGetMenusQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetMenusQuery, TGetMenusQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetMenusQuery, TGetMenusQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetMenusQuery, TGetMenusQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetMenusQuery, TGetMenusQueryVariables>(GetMenusDocument, variables, options);
}
export type GetMenusQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetMenusQuery, TGetMenusQueryVariables>;
export const GetServiceDocument = gql`
    query getService($id: ID!, $store_id: ID!) {
  getService(id: $id, store_id: $store_id) {
    id
    name
    image
    price
    duration
    description
    top
    active
    store_id
    menu_id
    extras {
      id
      multiple
      name
      active
      options {
        id
        name
        price
        duration
        description
        active
        default
      }
    }
  }
}
    `;

/**
 * __useGetServiceQuery__
 *
 * To run a query within a Vue component, call `useGetServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetServiceQuery({
 *   id: // value for 'id'
 *   store_id: // value for 'store_id'
 * });
 */
export function useGetServiceQuery(variables: TGetServiceQueryVariables | VueCompositionApi.Ref<TGetServiceQueryVariables> | ReactiveFunction<TGetServiceQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetServiceQuery, TGetServiceQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetServiceQuery, TGetServiceQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetServiceQuery, TGetServiceQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetServiceQuery, TGetServiceQueryVariables>(GetServiceDocument, variables, options);
}
export function useGetServiceLazyQuery(variables: TGetServiceQueryVariables | VueCompositionApi.Ref<TGetServiceQueryVariables> | ReactiveFunction<TGetServiceQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetServiceQuery, TGetServiceQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetServiceQuery, TGetServiceQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetServiceQuery, TGetServiceQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetServiceQuery, TGetServiceQueryVariables>(GetServiceDocument, variables, options);
}
export type GetServiceQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetServiceQuery, TGetServiceQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers($store_id: ID!, $search: String, $page: Int) {
  getUsers(store_id: $store_id, search: $search, page: $page) {
    data {
      id
      name
      email
      phone
      avatar
      created_at
      active
      birthday
      roles {
        id
        name
      }
    }
    paginatorInfo {
      count
      currentPage
      firstItem
      hasMorePages
      lastItem
      lastPage
      perPage
      total
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a Vue component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetUsersQuery({
 *   store_id: // value for 'store_id'
 *   search: // value for 'search'
 *   page: // value for 'page'
 * });
 */
export function useGetUsersQuery(variables: TGetUsersQueryVariables | VueCompositionApi.Ref<TGetUsersQueryVariables> | ReactiveFunction<TGetUsersQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetUsersQuery, TGetUsersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetUsersQuery, TGetUsersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetUsersQuery, TGetUsersQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetUsersQuery, TGetUsersQueryVariables>(GetUsersDocument, variables, options);
}
export function useGetUsersLazyQuery(variables: TGetUsersQueryVariables | VueCompositionApi.Ref<TGetUsersQueryVariables> | ReactiveFunction<TGetUsersQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetUsersQuery, TGetUsersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetUsersQuery, TGetUsersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetUsersQuery, TGetUsersQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetUsersQuery, TGetUsersQueryVariables>(GetUsersDocument, variables, options);
}
export type GetUsersQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetUsersQuery, TGetUsersQueryVariables>;
export const GetUserDocument = gql`
    query getUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    phone
    avatar
    birthday
    gender
    active
    storeIds
    created_at
    stores {
      id
      name
      address
    }
    roles {
      id
      name
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a Vue component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetUserQuery({
 *   id: // value for 'id'
 * });
 */
export function useGetUserQuery(variables: TGetUserQueryVariables | VueCompositionApi.Ref<TGetUserQueryVariables> | ReactiveFunction<TGetUserQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetUserQuery, TGetUserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetUserQuery, TGetUserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetUserQuery, TGetUserQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetUserQuery, TGetUserQueryVariables>(GetUserDocument, variables, options);
}
export function useGetUserLazyQuery(variables: TGetUserQueryVariables | VueCompositionApi.Ref<TGetUserQueryVariables> | ReactiveFunction<TGetUserQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetUserQuery, TGetUserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetUserQuery, TGetUserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetUserQuery, TGetUserQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetUserQuery, TGetUserQueryVariables>(GetUserDocument, variables, options);
}
export type GetUserQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetUserQuery, TGetUserQueryVariables>;
export const GetUsersListDocument = gql`
    query getUsersList($store_id: ID!) {
  getUsersList(store_id: $store_id) {
    id
    name
  }
}
    `;

/**
 * __useGetUsersListQuery__
 *
 * To run a query within a Vue component, call `useGetUsersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetUsersListQuery({
 *   store_id: // value for 'store_id'
 * });
 */
export function useGetUsersListQuery(variables: TGetUsersListQueryVariables | VueCompositionApi.Ref<TGetUsersListQueryVariables> | ReactiveFunction<TGetUsersListQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetUsersListQuery, TGetUsersListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetUsersListQuery, TGetUsersListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetUsersListQuery, TGetUsersListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetUsersListQuery, TGetUsersListQueryVariables>(GetUsersListDocument, variables, options);
}
export function useGetUsersListLazyQuery(variables: TGetUsersListQueryVariables | VueCompositionApi.Ref<TGetUsersListQueryVariables> | ReactiveFunction<TGetUsersListQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetUsersListQuery, TGetUsersListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetUsersListQuery, TGetUsersListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetUsersListQuery, TGetUsersListQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetUsersListQuery, TGetUsersListQueryVariables>(GetUsersListDocument, variables, options);
}
export type GetUsersListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetUsersListQuery, TGetUsersListQueryVariables>;
export const GetOrdersListDocument = gql`
    query getOrdersList($store_id: ID!, $scheduled_at: Date!, $status: OrderStatus) {
  getOrdersList(store_id: $store_id, scheduled_at: $scheduled_at, status: $status) {
    id
    no
    status
    start: scheduled_at
    end: ended_at
    duration
    resourceId: user_id
    user {
      id
      name
    }
  }
}
    `;

/**
 * __useGetOrdersListQuery__
 *
 * To run a query within a Vue component, call `useGetOrdersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetOrdersListQuery({
 *   store_id: // value for 'store_id'
 *   scheduled_at: // value for 'scheduled_at'
 *   status: // value for 'status'
 * });
 */
export function useGetOrdersListQuery(variables: TGetOrdersListQueryVariables | VueCompositionApi.Ref<TGetOrdersListQueryVariables> | ReactiveFunction<TGetOrdersListQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetOrdersListQuery, TGetOrdersListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetOrdersListQuery, TGetOrdersListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetOrdersListQuery, TGetOrdersListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetOrdersListQuery, TGetOrdersListQueryVariables>(GetOrdersListDocument, variables, options);
}
export function useGetOrdersListLazyQuery(variables: TGetOrdersListQueryVariables | VueCompositionApi.Ref<TGetOrdersListQueryVariables> | ReactiveFunction<TGetOrdersListQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetOrdersListQuery, TGetOrdersListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetOrdersListQuery, TGetOrdersListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetOrdersListQuery, TGetOrdersListQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetOrdersListQuery, TGetOrdersListQueryVariables>(GetOrdersListDocument, variables, options);
}
export type GetOrdersListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetOrdersListQuery, TGetOrdersListQueryVariables>;