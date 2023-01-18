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
  Mixed: any;
};

type TEmployee = {
  active: Scalars['Boolean'];
  /** The user's avatar image. */
  address?: Maybe<Scalars['String']>;
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
  /** The user's avatar image. */
  gender?: Maybe<Scalars['String']>;
  /** The unique primary key for the user. */
  id: Scalars['ID'];
  /** The user's name. */
  name: Scalars['String'];
  /** The user's avatar image. */
  phone?: Maybe<Scalars['String']>;
  placeIds?: Maybe<Array<Scalars['ID']>>;
  places: Array<TPlace>;
  /** Access token for the employee. */
  token?: Maybe<Scalars['String']>;
  /** The date and time when the user's account was last updated. */
  updated_at: Scalars['DateTime'];
  /** The employee's unique username */
  username: Scalars['String'];
};

type TEmployeeInput = {
  active: Scalars['Boolean'];
  address?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  placeIds: Array<Scalars['ID']>;
};

/** A paginated list of Employee items. */
type TEmployeePaginator = {
  /** A list of Employee items. */
  data: Array<TEmployee>;
  /** Pagination information about the list of items. */
  paginatorInfo: TPaginatorInfo;
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
  place_id: Scalars['ID'];
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
  image: Scalars['String'];
  /** The name of the menu service. */
  name: Scalars['String'];
  place_id: Scalars['ID'];
  /** The price of the menu service. */
  price: Scalars['Float'];
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
  /** A description of the menu service extra. */
  description?: Maybe<Scalars['String']>;
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
  place_id: Scalars['ID'];
};

type TMenuServiceExtraInput = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  multiple: Scalars['Boolean'];
  name: Scalars['String'];
  place_id: Scalars['ID'];
  service_id: Scalars['ID'];
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
  place_id: Scalars['ID'];
};

type TMenuServiceExtraOptionInput = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  extra_id: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  place_id: Scalars['ID'];
  price: Scalars['Float'];
};

type TMenuServiceInput = {
  active: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  duration: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  place_id: Scalars['ID'];
  price: Scalars['Float'];
  top: Scalars['Boolean'];
};

type TMutation = {
  deleteMenuServiceExtra?: Maybe<TMenuServiceExtra>;
  deleteMenuServiceExtraOption?: Maybe<TMenuServiceExtraOption>;
  /** Log in to a new session and get the user. */
  login: TEmployee;
  /** Log out of the current session. */
  logout?: Maybe<TEmployee>;
  saveEmployee?: Maybe<TEmployee>;
  saveMenu?: Maybe<TMenu>;
  saveMenuService?: Maybe<TMenuService>;
  saveMenuServiceExtra?: Maybe<TMenuServiceExtra>;
  saveMenuServiceExtraOption?: Maybe<TMenuServiceExtraOption>;
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


type TMutationSaveEmployeeArgs = {
  input: TEmployeeInput;
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

type TOrder = {
  /** The date and time when the order was created. */
  created_at: Scalars['DateTime'];
  /** The unique primary key for the order. */
  id: Scalars['ID'];
  /** A list of items in the order. */
  items: Array<TOrderItem>;
  /** The order number. */
  no: Scalars['String'];
  /** The place associated with the order. */
  place: TPlace;
  /** The current status of the order. */
  status: TOrderStatus;
  /** The total price of the order. */
  total: Scalars['Float'];
  /** The date and time when the order was last updated. */
  updated_at: Scalars['DateTime'];
  /** The user associated with the order. */
  user: TUser;
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

type TOrderItem = {
  /** The date and time when the order item was created. */
  created_at: Scalars['DateTime'];
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

type TPlace = {
  /** A boolean value indicating whether the place is active. */
  active: Scalars['Boolean'];
  /** The address of the place. */
  address: Scalars['String'];
  /** The cover image for the place. */
  cover: Scalars['String'];
  /** The date and time when the place was created. */
  created_at: Scalars['DateTime'];
  /** The place's description. */
  description?: Maybe<Scalars['String']>;
  /** The opening hours for the place. */
  hours: Scalars['String'];
  /** The unique primary key for the place. */
  id: Scalars['ID'];
  /** The image representing the place. */
  image: Scalars['String'];
  /** A list of menus for the place. */
  menus: Array<TMenu>;
  /** The place's name. */
  name: Scalars['String'];
  /** The phone number for the place. */
  phone: Scalars['String'];
  /** The date and time when the place was last updated. */
  updated_at: Scalars['DateTime'];
};

/** A paginated list of Place items. */
type TPlacePaginator = {
  /** A list of Place items. */
  data: Array<TPlace>;
  /** Pagination information about the list of items. */
  paginatorInfo: TPaginatorInfo;
};

type TQuery = {
  employee: TEmployee;
  employees?: Maybe<TEmployeePaginator>;
  me?: Maybe<TUser>;
  menus?: Maybe<Array<TMenu>>;
  order: TOrder;
  orders?: Maybe<TOrderPaginator>;
  /** Get a place of the current employee by its ID. */
  place: TPlace;
  /** Get place list of the current employee. */
  placeList?: Maybe<Array<TPlace>>;
  /** Get all places of the current employee. */
  places?: Maybe<TPlacePaginator>;
  service: TMenuService;
};


type TQueryEmployeeArgs = {
  id: Scalars['ID'];
};


type TQueryEmployeesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  place_id?: InputMaybe<Scalars['ID']>;
};


type TQueryMenusArgs = {
  place_id: Scalars['ID'];
};


type TQueryOrderArgs = {
  id: Scalars['ID'];
};


type TQueryOrdersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TQueryOrdersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  place_id?: InputMaybe<Scalars['ID']>;
  search?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TOrderStatus>;
};


type TQueryPlaceArgs = {
  id: Scalars['ID'];
};


type TQueryPlacesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


type TQueryServiceArgs = {
  id: Scalars['ID'];
};

/** Allowed column names for Query.orders.orderBy. */
enum TQueryOrdersOrderByColumn {
  CreatedAt = 'CREATED_AT',
  No = 'NO',
  Status = 'STATUS'
}

/** Order by clause for Query.orders.orderBy. */
type TQueryOrdersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: TQueryOrdersOrderByColumn;
  /** The direction that is used for ordering. */
  order: TSortOrder;
};

/** The available SQL operators that are used to filter query results. */
enum TSqlOperator {
  /** Whether a value is within a range of values (`BETWEEN`) */
  Between = 'BETWEEN',
  /** Equal operator (`=`) */
  Eq = 'EQ',
  /** Greater than operator (`>`) */
  Gt = 'GT',
  /** Greater than or equal operator (`>=`) */
  Gte = 'GTE',
  /** Whether a value is within a set of values (`IN`) */
  In = 'IN',
  /** Whether a value is not null (`IS NOT NULL`) */
  IsNotNull = 'IS_NOT_NULL',
  /** Whether a value is null (`IS NULL`) */
  IsNull = 'IS_NULL',
  /** Simple pattern matching (`LIKE`) */
  Like = 'LIKE',
  /** Less than operator (`<`) */
  Lt = 'LT',
  /** Less than or equal operator (`<=`) */
  Lte = 'LTE',
  /** Not equal operator (`!=`) */
  Neq = 'NEQ',
  /** Whether a value is not within a range of values (`NOT BETWEEN`) */
  NotBetween = 'NOT_BETWEEN',
  /** Whether a value is not within a set of values (`NOT IN`) */
  NotIn = 'NOT_IN',
  /** Negation of simple pattern matching (`NOT LIKE`) */
  NotLike = 'NOT_LIKE'
}

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
  /** The user's avatar image. */
  avatar?: Maybe<Scalars['String']>;
  /** The date and time when the user's account was created. */
  created_at: Scalars['DateTime'];
  /** The user's unique email address. */
  email?: Maybe<Scalars['String']>;
  /** The date and time when the user's email was verified. */
  email_verified_at?: Maybe<Scalars['DateTime']>;
  /** The unique primary key for the user. */
  id: Scalars['ID'];
  /** The user's name. */
  name: Scalars['String'];
  /** The date and time when the user's account was last updated. */
  updated_at: Scalars['DateTime'];
};

/** Dynamic WHERE conditions for queries. */
type TWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<TWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<TWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<TWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<Scalars['String']>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<TSqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
type TWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<TWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<TSqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
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

type TSaveEmployeeMutationVariables = Exact<{
  input: TEmployeeInput;
}>;


type TSaveEmployeeMutation = { saveEmployee?: { id: string } | null };

type TGetProfileQueryVariables = Exact<{ [key: string]: never; }>;


type TGetProfileQuery = { me?: { id: string, name: string, email?: string | null, avatar?: string | null } | null };

type TGetPlaceListQueryVariables = Exact<{ [key: string]: never; }>;


type TGetPlaceListQuery = { placeList?: Array<{ id: string, name: string, address: string }> | null };

type TGetPlacesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


type TGetPlacesQuery = { places?: { data: Array<{ id: string, name: string, description?: string | null, phone: string, image: string, cover: string, address: string, hours: string }>, paginatorInfo: { currentPage: number, lastPage: number, perPage: number, total: number, hasMorePages: boolean, count: number, firstItem?: number | null, lastItem?: number | null } } | null };

type TGetPlaceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


type TGetPlaceQuery = { place: { id: string, name: string, description?: string | null, phone: string, image: string, cover: string, address: string, hours: string } };

type TGetOrdersQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  place_id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<TOrderStatus>;
  page?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TQueryOrdersOrderByOrderByClause> | TQueryOrdersOrderByOrderByClause>;
}>;


type TGetOrdersQuery = { orders?: { data: Array<{ id: string, no: string, status: TOrderStatus, total: number, created_at: any, user: { id: string, name: string, avatar?: string | null } }>, paginatorInfo: { count: number, currentPage: number, firstItem?: number | null, hasMorePages: boolean, lastItem?: number | null, lastPage: number, perPage: number, total: number } } | null };

type TGetOrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


type TGetOrderQuery = { order: { id: string, status: TOrderStatus, no: string, total: number, created_at: any, user: { id: string, name: string, avatar?: string | null }, place: { id: string, name: string }, items: Array<{ id: string, quantity: number, price: number, service: { id: string, name: string, image: string, extras: Array<{ id: string, name: string, options: Array<{ id: string, name: string, price: number }> }> } }> } };

type TGetMenusQueryVariables = Exact<{
  place_id: Scalars['ID'];
}>;


type TGetMenusQuery = { menus?: Array<{ id: string, name: string, image?: string | null, description?: string | null, active: boolean, items: Array<{ id: string, name: string, image?: string | null, description?: string | null, active: boolean, parent_id?: string | null, services: Array<{ id: string, name: string, image: string, price: number, active: boolean, place_id: string }> }> }> | null };

type TGetServiceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


type TGetServiceQuery = { service: { id: string, name: string, image: string, price: number, duration: number, description?: string | null, top: boolean, active: boolean, place_id: string, extras: Array<{ id: string, multiple: boolean, name: string, description?: string | null, active: boolean, options: Array<{ id: string, name: string, price: number, duration: number, description?: string | null, active: boolean }> }> } };

type TGetEmployeesQueryVariables = Exact<{
  place_id?: InputMaybe<Scalars['ID']>;
}>;


type TGetEmployeesQuery = { employees?: { data: Array<{ id: string, name: string, email?: string | null, phone?: string | null, avatar?: string | null, created_at: any }>, paginatorInfo: { count: number, currentPage: number, firstItem?: number | null, hasMorePages: boolean, lastItem?: number | null, lastPage: number, perPage: number, total: number } } | null };

type TGetEmployeeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


type TGetEmployeeQuery = { employee: { id: string, name: string, email?: string | null, phone?: string | null, avatar?: string | null, birthday?: any | null, address?: string | null, gender?: string | null, active: boolean, placeIds?: Array<string> | null, created_at: any, places: Array<{ id: string, name: string, address: string }> } };
