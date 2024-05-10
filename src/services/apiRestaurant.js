const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw new Error('Failed to get menu');

  const { data } = await res.json();

  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);

  if (!res.ok) throw new Error('Failed to get order');

  const { data } = await res.json();

  return data;
}

export async function createOrder(order) {
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

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateOrder(id, order) {
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
    throw new Error(error.message);
  }
}
