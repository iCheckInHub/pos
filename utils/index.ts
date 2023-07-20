export const useToogleItem = (items: any[], item: any, key?: string) => {
  let array = JSON.parse(JSON.stringify(items));

  const index = array.findIndex((value: any) =>
    !key ? item === value : item[key] === value[key]
  );
  index === -1 ? array.push(item) : array.splice(index, 1);
  return array;
};

export const useFirestoreAutoId = (): string => {
  const CHARS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let autoId = '';

  for (let i = 0; i < 20; i++) {
    autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return autoId;
};

export const useColorStatus = (
  status: string = '',
  type?: 'text' | 'bg'
): string => {
  const colors = {
    pending: 'yellow',
    confirmed: 'blue',
    canceled: 'red',
    completed: 'green',
  } as any;

  const color = colors[status] || 'default';
  return !type ? color : `${type}-${color}`;
};

export const parseOrderByQueryToVariables = (value: any) => {
  if (!value) return [];

  const items: string[] = Array.isArray(value) ? (value as any) : [value];

  return items
    ?.map((item) => item.split(':'))
    ?.map(([key, order]) => ({
      key: key.toLowerCase(),
      order: order.toLowerCase(),
    })) as any[];
};

export const parseOrderByQueryToColumn = (value: any) => {
  if (!value) return [];

  const items: string[] = Array.isArray(value) ? (value as any) : [value];

  return items
    ?.map((item) => item.split(':'))
    ?.map(([column, order]) => ({
      column: column.toUpperCase(),
      order: order.toUpperCase(),
    })) as any[];
};

export const parseOrderByVariablesToKey = (value: any) => {
  if (!value || !value.length) return [];

  return value.map(({ column, order }: any) => ({
    key: column.toLowerCase(),
    order: order.toLowerCase(),
  }));
};

export const parseOrderByVariablesToQuery = (value: any[]) => {
  console.log(value);

  if (!value || !value.length) return undefined;
  return value.map(({ key, order }: any) => `${key}:${order}`);
};

export const filterEmptyProperties = (value: Object) => {
  return Object.fromEntries(
    Object.entries(value)
      .filter(([_, v]) => v != null) // remove null and undefined
      .filter(([_, v]) => !Array.isArray(v) || v.length > 0) // remove empty arrays
  );
};
