import { createSlice } from '@reduxjs/toolkit'
import { ProductModel } from '../../models/responses/Products/ProductModel';

export interface CartState {
  cartItems: {
    quantity: number;
    product: ProductModel;
  }[];
}
export const cartItems:CartState['cartItems']=[]

const initialState: CartState = {
  cartItems: cartItems,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(c => c.product.id === action.payload.id);
    
      if (existingProduct) {
        return {
          ...state,
          cartItems: state.cartItems.map(c =>
            c.product.id === action.payload.id
              ? { ...c, quantity: c.quantity + 1 }
              : c
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: action.payload }],
        };
      }
    },

    removeFromCart: (state,action) => {
      return{
        ...state,
        cartItems:state.cartItems.filter(c=>c.product.id !== action.payload.id)
      }
    },

    clearCart: (state) => {
      return {...state, cartItems: []};
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer