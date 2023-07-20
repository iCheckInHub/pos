type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  JSON: any;
  Upload: any;
};

type TCustomer = {
  /** The user's avatar image. */
  avatar?: Maybe<Scalars['String']>;
  /** The user's avatar image. */
  birthday?: Maybe<Scalars['Date']>;
  /** The date and time when the user's account was created. */
  created_at: Scalars['DateTime'];
  /** The user's unique email address. */
  email?: Maybe<Scalars['String']>;
  /** Customer gender. */
  gender?: Maybe<Scalars['String']>;
  /** The unique primary key for the user. */
  id: Scalars['ID'];
  /** The user's name. */
  name: Scalars['String'];
  /** The user's avatar image. */
  phone?: Maybe<Scalars['String']>;
  /** The date and time when the user's account was last updated. */
  updated_at: Scalars['DateTime'];
};

type TMenu = {
  /** A boolean value indicating whether the menu is active. */
  active: Scalars['Boolean'];
  /** The date and time when the menu was created. */
  created_at: Scalars['DateTime'];
  /** The menu's description. */
  description?: Maybe<Scalars['String']>;
  /** The unique primary key for the menu. */
  id: Scalars['ID'];
  /** The image representing the menu. */
  image?: Maybe<Scalars['String']>;
  /** The items on the menu. */
  items: Array<TMenuItem>;
  /** The menu's name. */
  name: Scalars['String'];
  /** The date and time when the menu was last updated. */
  updated_at: Scalars['DateTime'];
};

type TMenuInput = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent_id?: InputMaybe<Scalars['ID']>;
  store_id: Scalars['ID'];
};

type TMenuItem = {
  /** A boolean value indicating whether the menu item is active. */
  active: Scalars['Boolean'];
  /** The date and time when the menu item was created. */
  created_at: Scalars['DateTime'];
  /** A description of the menu item. */
  description?: Maybe<Scalars['String']>;
  /** The unique primary key for the menu item. */
  id: Scalars['ID'];
  /** An image representing the menu item. */
  image?: Maybe<Scalars['String']>;
  /** The name of the menu item. */
  name: Scalars['String'];
  /** The parent menu id. */
  parent_id?: Maybe<Scalars['ID']>;
  /** A list of services offered for the menu item. */
  services: Array<TMenuService>;
  /** The date and time when the menu item was last updated. */
  updated_at: Scalars['DateTime'];
};

type TMenuService = {
  /** A boolean value indicating whether the service is active. */
  active: Scalars['Boolean'];
  /** The date and time when the menu service was created. */
  created_at: Scalars['DateTime'];
  /** A description of the menu service. */
  description?: Maybe<Scalars['String']>;
  /** The duration of the menu service in minutes. */
  duration: Scalars['Int'];
  /** A list of extra options that can be added to the menu service. */
  extras: Array<TMenuServiceExtra>;
  /** The unique primary key for the menu service. */
  id: Scalars['ID'];
  /** An image representing the menu service. */
  image?: Maybe<Scalars['String']>;
  /** The store id for the menu service. */
  menu_id: Scalars['ID'];
  /** The name of the menu service. */
  name: Scalars['String'];
  /** The price of the menu service. */
  price: Scalars['Float'];
  /** The store id for the menu service. */
  store_id: Scalars['ID'];
  /** A boolean value indicating whether the menu service is a top choice. */
  top: Scalars['Boolean'];
  /** The date and time when the menu service was last updated. */
  updated_at: Scalars['DateTime'];
};

type TMenuServiceExtra = {
  /** A boolean value indicating whether the extra is active. */
  active: Scalars['Boolean'];
  /** The date and time when the menu service extra was created. */
  created_at: Scalars['DateTime'];
  /** The unique primary key for the menu service extra. */
  id: Scalars['ID'];
  /** A boolean value indicating whether the menu service extra can be chosen multiple times. */
  multiple: Scalars['Boolean'];
  /** The name of the menu service extra. */
  name: Scalars['String'];
  /** A list of options for the menu service extra. */
  options: Array<TMenuServiceExtraOption>;
  /** The date and time when the menu service extra was last updated. */
  updated_at: Scalars['DateTime'];
};

type TMenuServiceExtraDeleteInput = {
  id?: InputMaybe<Scalars['ID']>;
  store_id: Scalars['ID'];
};

type TMenuServiceExtraInput = {
  active: Scalars['Boolean'];
  id?: InputMaybe<Scalars['ID']>;
  multiple: Scalars['Boolean'];
  name: Scalars['String'];
  service_id: Scalars['ID'];
  store_id: Scalars['ID'];
};

type TMenuServiceExtraOption = {
  /** A boolean value indicating whether the extra option is active. */
  active: Scalars['Boolean'];
  /** The date and time when the menu service extra option was created. */
  created_at: Scalars['DateTime'];
  /** The default option for the menu service extra. */
  default: Scalars['Boolean'];
  /** A description of the menu service extra option. */
  description?: Maybe<Scalars['String']>;
  /** The duration of the menu service extra option in minutes. */
  duration: Scalars['Int'];
  /** The unique primary key for the menu service extra option. */
  id: Scalars['ID'];
  /** The name of the menu service extra option. */
  name: Scalars['String'];
  /** The price of the menu service extra option. */
  price: Scalars['Float'];
  /** The date and time when the menu service extra option was last updated. */
  updated_at: Scalars['DateTime'];
};

type TMenuServiceExtraOptionDeleteInput = {
  id?: InputMaybe<Scalars['ID']>;
  store_id: Scalars['ID'];
};

type TMenuServiceExtraOptionInput = {
  active: Scalars['Boolean'];
  default?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  extra_id: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  store_id: Scalars['ID'];
};

type TMenuServiceInput = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  duration: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['Upload']>;
  menu_id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  store_id: Scalars['ID'];
  top: Scalars['Boolean'];
};

type TMutation = {
  deleteMenuServiceExtra?: Maybe<TMenuServiceExtra>;
  deleteMenuServiceExtraOption?: Maybe<TMenuServiceExtraOption>;
  /** Log in to a new session and get the user. */
  login: TUser;
  /** Log out of the current session. */
  logout?: Maybe<TUser>;
  saveMenu?: Maybe<TMenu>;
  saveMenuService?: Maybe<TMenuService>;
  saveMenuServiceExtra?: Maybe<TMenuServiceExtra>;
  saveMenuServiceExtraOption?: Maybe<TMenuServiceExtraOption>;
  saveOrder?: Maybe<TOrder>;
  saveUser?: Maybe<TUser>;
};


type TMutationDeleteMenuServiceExtraArgs = {
  input: TMenuServiceExtraDeleteInput;
};


type TMutationDeleteMenuServiceExtraOptionArgs = {
  input: TMenuServiceExtraOptionDeleteInput;
};


type TMutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


type TMutationSaveMenuArgs = {
  input: TMenuInput;
};


type TMutationSaveMenuServiceArgs = {
  input: TMenuServiceInput;
};


type TMutationSaveMenuServiceExtraArgs = {
  input: TMenuServiceExtraInput;
};


type TMutationSaveMenuServiceExtraOptionArgs = {
  input: TMenuServiceExtraOptionInput;
};


type TMutationSaveOrderArgs = {
  input: TOrderInput;
};


type TMutationSaveUserArgs = {
  input: TUserInput;
};

type TOrder = {
  /** The date and time when the order was created. */
  created_at: Scalars['DateTime'];
  duration: Scalars['Int'];
  /** The user associated with the order. */
  employee?: Maybe<TUser>;
  ended_at: Scalars['DateTime'];
  /** The unique primary key for the order. */
  id: Scalars['ID'];
  /** A list of items in the order. */
  items: Array<TOrderItem>;
  /** The order number. */
  no: Scalars['String'];
  /** The date and time when the order was created. */
  scheduled_at: Scalars['DateTime'];
  /** The current status of the order. */
  status: TOrderStatus;
  /** The store associated with the order. */
  store: TStore;
  /** The total price of the order. */
  total: Scalars['Float'];
  /** The date and time when the order was last updated. */
  updated_at: Scalars['DateTime'];
  /** The user associated with the order. */
  user: TUser;
  user_id: Scalars['ID'];
};

/** Allows ordering a list of records. */
type TOrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: TSortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
enum TOrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
enum TOrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

type TOrderInput = {
  employee_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  scheduled_at?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['String']>;
  store_id: Scalars['ID'];
};

type TOrderItem = {
  /** The date and time when the order item was created. */
  created_at: Scalars['DateTime'];
  data?: Maybe<TOrderItemData>;
  /** The user associated with the order item. */
  employee?: Maybe<TUser>;
  /** The unique primary key for the order item. */
  id: Scalars['ID'];
  /** A list of IDs representing options chosen for the order item. */
  optionIds?: Maybe<Array<Scalars['ID']>>;
  /** The price of the item in the order. */
  price: Scalars['Float'];
  /** The quantity of the item ordered. */
  quantity: Scalars['Int'];
  /** The menu service associated with the order item. */
  service: TMenuService;
  /** The date and time when the order item was last updated. */
  updated_at: Scalars['DateTime'];
};

type TOrderItemData = {
  options?: Maybe<Array<TMenuServiceExtraOption>>;
  service?: Maybe<TMenuService>;
};

/** A paginated list of Order items. */
type TOrderPaginator = {
  /** A list of Order items. */
  data: Array<TOrder>;
  /** Pagination information about the list of items. */
  paginatorInfo: TPaginatorInfo;
};

enum TOrderStatus {
  /** The order has been canceled by the customer. */
  Canceled = 'canceled',
  /** The order has been completed and is no longer being processed. */
  Completed = 'completed',
  /** The order has been accepted and is being processed. */
  Confirmed = 'confirmed',
  /** The order is pending and has not yet been accepted or rejected. */
  Pending = 'pending'
}

/** Information about pagination using a Relay style cursor connection. */
type TPageInfo = {
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
type TPaginatorInfo = {
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

type TQuery = {
  getMenus?: Maybe<Array<TMenu>>;
  getOrder: TOrder;
  getOrders: TOrderPaginator;
  getOrdersList?: Maybe<Array<TOrder>>;
  getService: TMenuService;
  /** Get a store of the current employee by its ID. */
  getStore: TStore;
  /** Get store list of the current employee. */
  getStoresList?: Maybe<Array<TStore>>;
  getUser: TUser;
  getUsers: TUserPaginator;
  getUsersList?: Maybe<Array<TUser>>;
  /** Get profile */
  me?: Maybe<TUser>;
};


type TQueryGetMenusArgs = {
  store_id: Scalars['ID'];
};


type TQueryGetOrderArgs = {
  id: Scalars['ID'];
  store_id: Scalars['ID'];
};


type TQueryGetOrdersArgs = {
  first?: Scalars['Int'];
  orderBy?: InputMaybe<Array<TQueryGetOrdersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TOrderStatus>;
  store_id: Scalars['ID'];
};


type TQueryGetOrdersListArgs = {
  scheduled_at: Scalars['Date'];
  status?: InputMaybe<TOrderStatus>;
  store_id: Scalars['ID'];
};


type TQueryGetServiceArgs = {
  id: Scalars['ID'];
  store_id: Scalars['ID'];
};


type TQueryGetStoreArgs = {
  id: Scalars['ID'];
};


type TQueryGetUserArgs = {
  id: Scalars['ID'];
};


type TQueryGetUsersArgs = {
  first?: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  store_id: Scalars['ID'];
};


type TQueryGetUsersListArgs = {
  store_id: Scalars['ID'];
};

/** Allowed column names for Query.getOrders.orderBy. */
enum TQueryGetOrdersOrderByColumn {
  CreatedAt = 'CREATED_AT',
  No = 'NO',
  Status = 'STATUS'
}

/** Order by clause for Query.getOrders.orderBy. */
type TQueryGetOrdersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: TQueryGetOrdersOrderByColumn;
  /** The direction that is used for ordering. */
  order: TSortOrder;
};

type TRole = {
  guard_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Information about pagination using a simple paginator. */
type TSimplePaginatorInfo = {
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
};

/** Directions for ordering a list of records. */
enum TSortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

type TStore = {
  /** A boolean value indicating whether the store is active. */
  active: Scalars['Boolean'];
  /** The address of the store. */
  address: Scalars['String'];
  /** The cover image for the store. */
  cover: Scalars['String'];
  /** The date and time when the store was created. */
  created_at: Scalars['DateTime'];
  /** The store's description. */
  description?: Maybe<Scalars['String']>;
  /** The opening hours for the store. */
  hours: Scalars['String'];
  /** The unique primary key for the store. */
  id: Scalars['ID'];
  /** The image representing the store. */
  image: Scalars['String'];
  /** A list of menus for the store. */
  menus: Array<TMenu>;
  /** The store's name. */
  name: Scalars['String'];
  /** The phone number for the store. */
  phone: Scalars['String'];
  /** The date and time when the store was last updated. */
  updated_at: Scalars['DateTime'];
};

/** Specify if you want to include or exclude trashed results from a query. */
enum TTrashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

type TUser = {
  /** Customer gender. */
  active: Scalars['Boolean'];
  /** The user's avatar image. */
  avatar?: Maybe<Scalars['String']>;
  /** The user's avatar image. */
  birthday?: Maybe<Scalars['Date']>;
  /** The date and time when the user's account was created. */
  created_at: Scalars['DateTime'];
  /** The user's unique email address. */
  email?: Maybe<Scalars['String']>;
  /** The date and time when the user's email was verified. */
  email_verified_at?: Maybe<Scalars['DateTime']>;
  /** Customer gender. */
  gender?: Maybe<Scalars['String']>;
  /** The unique primary key for the user. */
  id: Scalars['ID'];
  /** The user's name. */
  name: Scalars['String'];
  /** The user's avatar image. */
  phone?: Maybe<Scalars['String']>;
  /** A list of stores offered by the user. */
  roles: Array<TRole>;
  /** A list of store ids offered by the user. */
  storeIds: Array<Scalars['ID']>;
  /** A list of stores offered by the user. */
  stores: Array<TStore>;
  /** Access token for the user. */
  token?: Maybe<Scalars['String']>;
  /** The date and time when the user's account was last updated. */
  updated_at: Scalars['DateTime'];
};

type TUserInput = {
  active: Scalars['Boolean'];
  address?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  storeIds: Array<Scalars['ID']>;
};

/** A paginated list of User items. */
type TUserPaginator = {
  /** A list of User items. */
  data: Array<TUser>;
  /** Pagination information about the list of items. */
  paginatorInfo: TPaginatorInfo;
};

type TLoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


type TLoginMutation = { login: { id: string, name: string, email?: string | null, avatar?: string | null, token?: string | null } };

type TSaveMenuMutationVariables = Exact<{
  input: TMenuInput;
}>;


type TSaveMenuMutation = { saveMenu?: { id: string, name: string, description?: string | null, image?: string | null, active: boolean } | null };

type TSaveMenuServiceMutationVariables = Exact<{
  input: TMenuServiceInput;
}>;


type TSaveMenuServiceMutation = { saveMenuService?: { id: string } | null };

type TSaveMenuServiceExtraMutationVariables = Exact<{
  input: TMenuServiceExtraInput;
}>;


type TSaveMenuServiceExtraMutation = { saveMenuServiceExtra?: { id: string } | null };

type TSaveMenuServiceExtraOptionMutationVariables = Exact<{
  input: TMenuServiceExtraOptionInput;
}>;


type TSaveMenuServiceExtraOptionMutation = { saveMenuServiceExtraOption?: { id: string } | null };

type TDeleteMenuServiceExtraMutationVariables = Exact<{
  input: TMenuServiceExtraDeleteInput;
}>;


type TDeleteMenuServiceExtraMutation = { deleteMenuServiceExtra?: { id: string } | null };

type TDeleteMenuServiceExtraOptionMutationVariables = Exact<{
  input: TMenuServiceExtraOptionDeleteInput;
}>;


type TDeleteMenuServiceExtraOptionMutation = { deleteMenuServiceExtraOption?: { id: string } | null };

type TSaveUserMutationVariables = Exact<{
  input: TUserInput;
}>;


type TSaveUserMutation = { saveUser?: { id: string } | null };

type TSaveOrderMutationVariables = Exact<{
  input: TOrderInput;
}>;


type TSaveOrderMutation = { saveOrder?: { id: string, scheduled_at: any, employee?: { id: string, name: string } | null } | null };

type TGetProfileQueryVariables = Exact<{ [key: string]: never; }>;


type TGetProfileQuery = { me?: { id: string, name: string, email?: string | null, avatar?: string | null } | null };

type TGetStoresListQueryVariables = Exact<{ [key: string]: never; }>;


type TGetStoresListQuery = { getStoresList?: Array<{ id: string, name: string, address: string, image: string }> | null };

type TGetStoreQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


type TGetStoreQuery = { getStore: { id: string, name: string, description?: string | null, phone: string, image: string, cover: string, address: string, hours: string } };

type TGetOrdersQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  store_id: Scalars['ID'];
  status?: InputMaybe<TOrderStatus>;
  page?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TQueryGetOrdersOrderByOrderByClause> | TQueryGetOrdersOrderByOrderByClause>;
}>;


type TGetOrdersQuery = { getOrders: { data: Array<{ id: string, no: string, status: TOrderStatus, total: number, created_at: any, user: { id: string, name: string, avatar?: string | null, phone?: string | null } }>, paginatorInfo: { count: number, currentPage: number, firstItem?: number | null, hasMorePages: boolean, lastItem?: number | null, lastPage: number, perPage: number, total: number } } };

type TGetOrderQueryVariables = Exact<{
  id: Scalars['ID'];
  store_id: Scalars['ID'];
}>;


type TGetOrderQuery = { getOrder: { id: string, status: TOrderStatus, no: string, total: number, duration: number, created_at: any, user: { id: string, name: string, avatar?: string | null, phone?: string | null }, store: { id: string, name: string }, items: Array<{ id: string, quantity: number, price: number, data?: { service?: { id: string, name: string, image?: string | null } | null, options?: Array<{ id: string, name: string, price: number }> | null } | null }> } };

type TGetMenusQueryVariables = Exact<{
  store_id: Scalars['ID'];
}>;


type TGetMenusQuery = { getMenus?: Array<{ id: string, name: string, image?: string | null, active: boolean, items: Array<{ id: string, name: string, image?: string | null, active: boolean, services: Array<{ id: string, name: string, image?: string | null, price: number, active: boolean }> }> }> | null };

type TGetServiceQueryVariables = Exact<{
  id: Scalars['ID'];
  store_id: Scalars['ID'];
}>;


type TGetServiceQuery = { getService: { id: string, name: string, image?: string | null, price: number, duration: number, description?: string | null, top: boolean, active: boolean, store_id: string, menu_id: string, extras: Array<{ id: string, multiple: boolean, name: string, active: boolean, options: Array<{ id: string, name: string, price: number, duration: number, description?: string | null, active: boolean, default: boolean }> }> } };

type TGetUsersQueryVariables = Exact<{
  store_id: Scalars['ID'];
  search?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


type TGetUsersQuery = { getUsers: { data: Array<{ id: string, name: string, email?: string | null, phone?: string | null, avatar?: string | null, created_at: any, active: boolean, birthday?: any | null, roles: Array<{ id: string, name: string }> }>, paginatorInfo: { count: number, currentPage: number, firstItem?: number | null, hasMorePages: boolean, lastItem?: number | null, lastPage: number, perPage: number, total: number } } };

type TGetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


type TGetUserQuery = { getUser: { id: string, name: string, email?: string | null, phone?: string | null, avatar?: string | null, birthday?: any | null, gender?: string | null, active: boolean, storeIds: Array<string>, created_at: any, stores: Array<{ id: string, name: string, address: string }>, roles: Array<{ id: string, name: string }> } };

type TGetUsersListQueryVariables = Exact<{
  store_id: Scalars['ID'];
}>;


type TGetUsersListQuery = { getUsersList?: Array<{ id: string, name: string }> | null };

type TGetOrdersListQueryVariables = Exact<{
  store_id: Scalars['ID'];
  scheduled_at: Scalars['Date'];
  status?: InputMaybe<TOrderStatus>;
}>;


type TGetOrdersListQuery = { getOrdersList?: Array<{ id: string, no: string, status: TOrderStatus, duration: number, start: any, end: any, resourceId: string, user: { id: string, name: string } }> | null };
