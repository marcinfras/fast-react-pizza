import { MenuItemType, NewOrderType, OrderType } from './apiTypes';

const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw new Error('Failed to get menu');

  // const { data }: Record<'data', MenuType> = await res.json();
  const { data } = await res.json();

  return data as MenuItemType[];
}

export async function getOrder(id: string) {
  const res = await fetch(`${API_URL}/order/${id}`);

  if (!res.ok) throw new Error('Failed to get order');

  const { data } = await res.json();

  return data as OrderType;
}

export async function createOrder(order: NewOrderType) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Failed to order');

    const { data } = await res.json();

    return data as OrderType;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function updateOrder(id: string, order: { priority: boolean }) {
  //order: {priority: boolean}

  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Failed to update order');
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
