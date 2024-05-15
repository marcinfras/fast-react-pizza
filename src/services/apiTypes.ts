export type MenuItemType = {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  soldOut: false;
  unitPrice: number;
};

type CartItemType = {
  addIngredients?: string[];
  name: string;
  pizzaId: number;
  quantity: number;
  removeIngredients?: string[];
  totalPrice: number;
  unitPrice: number;
};

export type OrderType = {
  cart: CartItemType[];
  customer: string;
  address?: string;
  estimatedDelivery: string;
  id: string;
  orderPrice: number;
  priority: boolean;
  priorityPrice: number;
  status: string;
};

export type NewOrderType = {
  address: string;
  cart: CartItemType[];
  customer: string;
  phone: string;
  priority: boolean;
};
