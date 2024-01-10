import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProductModel } from '../../models/responses/Products/ProductModel';
import { boolean } from 'yup';

export interface IAuth {
  isAuthenticated: boolean;
}

const initialState: IAuth = {
  isAuthenticated: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },

  },
})

export const { setAuthentication } = authSlice.actions
export default authSlice.reducer