import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },

    increasePizzaQuantity(state, action) {
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      pizza.quantity++;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
    },

    decreasePizzaQuantity(state, action) {
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      pizza.quantity--;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
    },

    deletePizza(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  increasePizzaQuantity,
  decreasePizzaQuantity,
  deletePizza,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (id) => {
  return (state) =>
    state.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity ?? 0;
};

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

export default cartSlice.reducer;
