import { useStorage } from '@vueuse/core';

export const useStore = () => useStorage<string>('store', '');
