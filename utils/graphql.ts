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
export function useLoginMutation(options: VueApolloComposable.UseMutationOptions<TLoginMutation, TLoginMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TLoginMutation, TLoginMutationVariables>>) {
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
export function useSaveMenuMutation(options: VueApolloComposable.UseMutationOptions<TSaveMenuMutation, TSaveMenuMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TSaveMenuMutation, TSaveMenuMutationVariables>>) {
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
export function useSaveMenuServiceMutation(options: VueApolloComposable.UseMutationOptions<TSaveMenuServiceMutation, TSaveMenuServiceMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TSaveMenuServiceMutation, TSaveMenuServiceMutationVariables>>) {
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
export function useSaveMenuServiceExtraMutation(options: VueApolloComposable.UseMutationOptions<TSaveMenuServiceExtraMutation, TSaveMenuServiceExtraMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TSaveMenuServiceExtraMutation, TSaveMenuServiceExtraMutationVariables>>) {
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
export function useSaveMenuServiceExtraOptionMutation(options: VueApolloComposable.UseMutationOptions<TSaveMenuServiceExtraOptionMutation, TSaveMenuServiceExtraOptionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TSaveMenuServiceExtraOptionMutation, TSaveMenuServiceExtraOptionMutationVariables>>) {
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
export function useDeleteMenuServiceExtraMutation(options: VueApolloComposable.UseMutationOptions<TDeleteMenuServiceExtraMutation, TDeleteMenuServiceExtraMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TDeleteMenuServiceExtraMutation, TDeleteMenuServiceExtraMutationVariables>>) {
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
export function useDeleteMenuServiceExtraOptionMutation(options: VueApolloComposable.UseMutationOptions<TDeleteMenuServiceExtraOptionMutation, TDeleteMenuServiceExtraOptionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TDeleteMenuServiceExtraOptionMutation, TDeleteMenuServiceExtraOptionMutationVariables>>) {
  return VueApolloComposable.useMutation<TDeleteMenuServiceExtraOptionMutation, TDeleteMenuServiceExtraOptionMutationVariables>(DeleteMenuServiceExtraOptionDocument, options);
}
export type DeleteMenuServiceExtraOptionMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<TDeleteMenuServiceExtraOptionMutation, TDeleteMenuServiceExtraOptionMutationVariables>;
export const SaveEmployeeDocument = gql`
    mutation saveEmployee($input: EmployeeInput!) {
  saveEmployee(input: $input) {
    id
  }
}
    `;

/**
 * __useSaveEmployeeMutation__
 *
 * To run a mutation, you first call `useSaveEmployeeMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveEmployeeMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveEmployeeMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveEmployeeMutation(options: VueApolloComposable.UseMutationOptions<TSaveEmployeeMutation, TSaveEmployeeMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<TSaveEmployeeMutation, TSaveEmployeeMutationVariables>>) {
  return VueApolloComposable.useMutation<TSaveEmployeeMutation, TSaveEmployeeMutationVariables>(SaveEmployeeDocument, options);
}
export type SaveEmployeeMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<TSaveEmployeeMutation, TSaveEmployeeMutationVariables>;
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
export const GetPlaceListDocument = gql`
    query getPlaceList {
  placeList {
    id
    name
    address
  }
}
    `;

/**
 * __useGetPlaceListQuery__
 *
 * To run a query within a Vue component, call `useGetPlaceListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlaceListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPlaceListQuery();
 */
export function useGetPlaceListQuery(options: VueApolloComposable.UseQueryOptions<TGetPlaceListQuery, TGetPlaceListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetPlaceListQuery, TGetPlaceListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetPlaceListQuery, TGetPlaceListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetPlaceListQuery, TGetPlaceListQueryVariables>(GetPlaceListDocument, {}, options);
}
export function useGetPlaceListLazyQuery(options: VueApolloComposable.UseQueryOptions<TGetPlaceListQuery, TGetPlaceListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetPlaceListQuery, TGetPlaceListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetPlaceListQuery, TGetPlaceListQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetPlaceListQuery, TGetPlaceListQueryVariables>(GetPlaceListDocument, {}, options);
}
export type GetPlaceListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetPlaceListQuery, TGetPlaceListQueryVariables>;
export const GetPlacesDocument = gql`
    query getPlaces($first: Int, $page: Int) {
  places(first: $first, page: $page) {
    data {
      id
      name
      description
      phone
      image
      cover
      address
      hours
    }
    paginatorInfo {
      currentPage
      lastPage
      perPage
      total
      hasMorePages
      count
      firstItem
      lastItem
    }
  }
}
    `;

/**
 * __useGetPlacesQuery__
 *
 * To run a query within a Vue component, call `useGetPlacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlacesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPlacesQuery({
 *   first: // value for 'first'
 *   page: // value for 'page'
 * });
 */
export function useGetPlacesQuery(variables: TGetPlacesQueryVariables | VueCompositionApi.Ref<TGetPlacesQueryVariables> | ReactiveFunction<TGetPlacesQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<TGetPlacesQuery, TGetPlacesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetPlacesQuery, TGetPlacesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetPlacesQuery, TGetPlacesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetPlacesQuery, TGetPlacesQueryVariables>(GetPlacesDocument, variables, options);
}
export function useGetPlacesLazyQuery(variables: TGetPlacesQueryVariables | VueCompositionApi.Ref<TGetPlacesQueryVariables> | ReactiveFunction<TGetPlacesQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<TGetPlacesQuery, TGetPlacesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetPlacesQuery, TGetPlacesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetPlacesQuery, TGetPlacesQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetPlacesQuery, TGetPlacesQueryVariables>(GetPlacesDocument, variables, options);
}
export type GetPlacesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetPlacesQuery, TGetPlacesQueryVariables>;
export const GetPlaceDocument = gql`
    query getPlace($id: ID!) {
  place(id: $id) {
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
 * __useGetPlaceQuery__
 *
 * To run a query within a Vue component, call `useGetPlaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlaceQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPlaceQuery({
 *   id: // value for 'id'
 * });
 */
export function useGetPlaceQuery(variables: TGetPlaceQueryVariables | VueCompositionApi.Ref<TGetPlaceQueryVariables> | ReactiveFunction<TGetPlaceQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetPlaceQuery, TGetPlaceQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetPlaceQuery, TGetPlaceQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetPlaceQuery, TGetPlaceQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetPlaceQuery, TGetPlaceQueryVariables>(GetPlaceDocument, variables, options);
}
export function useGetPlaceLazyQuery(variables: TGetPlaceQueryVariables | VueCompositionApi.Ref<TGetPlaceQueryVariables> | ReactiveFunction<TGetPlaceQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetPlaceQuery, TGetPlaceQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetPlaceQuery, TGetPlaceQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetPlaceQuery, TGetPlaceQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetPlaceQuery, TGetPlaceQueryVariables>(GetPlaceDocument, variables, options);
}
export type GetPlaceQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetPlaceQuery, TGetPlaceQueryVariables>;
export const GetOrdersDocument = gql`
    query getOrders($search: String, $place_id: ID, $status: OrderStatus, $page: Int, $orderBy: [QueryOrdersOrderByOrderByClause!]) {
  orders(
    place_id: $place_id
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
 *   place_id: // value for 'place_id'
 *   status: // value for 'status'
 *   page: // value for 'page'
 *   orderBy: // value for 'orderBy'
 * });
 */
export function useGetOrdersQuery(variables: TGetOrdersQueryVariables | VueCompositionApi.Ref<TGetOrdersQueryVariables> | ReactiveFunction<TGetOrdersQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<TGetOrdersQuery, TGetOrdersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetOrdersQuery, TGetOrdersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetOrdersQuery, TGetOrdersQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetOrdersQuery, TGetOrdersQueryVariables>(GetOrdersDocument, variables, options);
}
export function useGetOrdersLazyQuery(variables: TGetOrdersQueryVariables | VueCompositionApi.Ref<TGetOrdersQueryVariables> | ReactiveFunction<TGetOrdersQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<TGetOrdersQuery, TGetOrdersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetOrdersQuery, TGetOrdersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetOrdersQuery, TGetOrdersQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetOrdersQuery, TGetOrdersQueryVariables>(GetOrdersDocument, variables, options);
}
export type GetOrdersQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetOrdersQuery, TGetOrdersQueryVariables>;
export const GetOrderDocument = gql`
    query getOrder($id: ID!) {
  order(id: $id) {
    id
    status
    no
    total
    user {
      id
      name
      avatar
    }
    place {
      id
      name
    }
    items {
      id
      quantity
      price
      service {
        id
        name
        image
        extras {
          id
          name
          options {
            id
            name
            price
          }
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
    query getMenus($place_id: ID!) {
  menus(place_id: $place_id) {
    id
    name
    image
    description
    active
    items {
      id
      name
      image
      description
      active
      parent_id
      services {
        id
        name
        image
        price
        active
        place_id
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
 *   place_id: // value for 'place_id'
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
    query getService($id: ID!) {
  service(id: $id) {
    id
    name
    image
    price
    duration
    description
    top
    active
    place_id
    extras {
      id
      multiple
      name
      description
      active
      options {
        id
        name
        price
        duration
        description
        active
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
 * });
 */
export function useGetServiceQuery(variables: TGetServiceQueryVariables | VueCompositionApi.Ref<TGetServiceQueryVariables> | ReactiveFunction<TGetServiceQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetServiceQuery, TGetServiceQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetServiceQuery, TGetServiceQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetServiceQuery, TGetServiceQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetServiceQuery, TGetServiceQueryVariables>(GetServiceDocument, variables, options);
}
export function useGetServiceLazyQuery(variables: TGetServiceQueryVariables | VueCompositionApi.Ref<TGetServiceQueryVariables> | ReactiveFunction<TGetServiceQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetServiceQuery, TGetServiceQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetServiceQuery, TGetServiceQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetServiceQuery, TGetServiceQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetServiceQuery, TGetServiceQueryVariables>(GetServiceDocument, variables, options);
}
export type GetServiceQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetServiceQuery, TGetServiceQueryVariables>;
export const GetEmployeesDocument = gql`
    query getEmployees($place_id: ID) {
  employees(place_id: $place_id) {
    data {
      id
      name
      email
      phone
      avatar
      created_at
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
 * __useGetEmployeesQuery__
 *
 * To run a query within a Vue component, call `useGetEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetEmployeesQuery({
 *   place_id: // value for 'place_id'
 * });
 */
export function useGetEmployeesQuery(variables: TGetEmployeesQueryVariables | VueCompositionApi.Ref<TGetEmployeesQueryVariables> | ReactiveFunction<TGetEmployeesQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<TGetEmployeesQuery, TGetEmployeesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetEmployeesQuery, TGetEmployeesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetEmployeesQuery, TGetEmployeesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetEmployeesQuery, TGetEmployeesQueryVariables>(GetEmployeesDocument, variables, options);
}
export function useGetEmployeesLazyQuery(variables: TGetEmployeesQueryVariables | VueCompositionApi.Ref<TGetEmployeesQueryVariables> | ReactiveFunction<TGetEmployeesQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<TGetEmployeesQuery, TGetEmployeesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetEmployeesQuery, TGetEmployeesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetEmployeesQuery, TGetEmployeesQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetEmployeesQuery, TGetEmployeesQueryVariables>(GetEmployeesDocument, variables, options);
}
export type GetEmployeesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetEmployeesQuery, TGetEmployeesQueryVariables>;
export const GetEmployeeDocument = gql`
    query getEmployee($id: ID!) {
  employee(id: $id) {
    id
    name
    email
    phone
    avatar
    birthday
    address
    gender
    active
    placeIds
    places {
      id
      name
      address
    }
    created_at
  }
}
    `;

/**
 * __useGetEmployeeQuery__
 *
 * To run a query within a Vue component, call `useGetEmployeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetEmployeeQuery({
 *   id: // value for 'id'
 * });
 */
export function useGetEmployeeQuery(variables: TGetEmployeeQueryVariables | VueCompositionApi.Ref<TGetEmployeeQueryVariables> | ReactiveFunction<TGetEmployeeQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetEmployeeQuery, TGetEmployeeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetEmployeeQuery, TGetEmployeeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetEmployeeQuery, TGetEmployeeQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TGetEmployeeQuery, TGetEmployeeQueryVariables>(GetEmployeeDocument, variables, options);
}
export function useGetEmployeeLazyQuery(variables: TGetEmployeeQueryVariables | VueCompositionApi.Ref<TGetEmployeeQueryVariables> | ReactiveFunction<TGetEmployeeQueryVariables>, options: VueApolloComposable.UseQueryOptions<TGetEmployeeQuery, TGetEmployeeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TGetEmployeeQuery, TGetEmployeeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TGetEmployeeQuery, TGetEmployeeQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TGetEmployeeQuery, TGetEmployeeQueryVariables>(GetEmployeeDocument, variables, options);
}
export type GetEmployeeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TGetEmployeeQuery, TGetEmployeeQueryVariables>;