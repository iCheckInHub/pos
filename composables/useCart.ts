export const useCarts = () =>
  useState<TCart[]>('place-carts', () => reactive([]));

export const useCart = (place_id: string) =>
  useState<TCart>(`place-cart-${place_id}`, () => {
    const cart = useCarts().value.find((cart) => cart.place_id === place_id);
    if (!cart) {
      useCarts().value.push({ place_id, items: [] });
    }
    return useState(`place-cart-${place_id}`);
  });
