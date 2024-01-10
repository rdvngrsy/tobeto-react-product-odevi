import { createSlice } from '@reduxjs/toolkit'
import { ProductModel } from '../../models/responses/Products/ProductModel';

export interface CartItems {
  quantity: number;
  product: ProductModel;
}

const initialState = {
  cartItems: (JSON.parse(localStorage.getItem("cart")!) || []) as CartItems[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(c => c.product.id === action.payload.id);
    
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        //immer toolkit te artık immutable sorununu çözüyor. Push yapılabilir.
        state.cartItems.push({ quantity: 1, product: action.payload });
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state,action) => {
      state.cartItems.filter(c=>c.product.id !== action.payload.id)
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer