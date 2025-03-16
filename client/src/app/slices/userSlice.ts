import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { User } from '../api/types';
export type Form = {
  name: string;
  price: string;
  measurement: string;
  total: string;
  date: string;
  tag: string[];
  quantity: number;
};

export interface UserState {
  user: User | null;
  form: Form;
  expire: number;
}

const initialState: UserState = {
  user: null,
  expire: 0,
  form: {
    name: '',
    price: '',
    measurement: '',
    total: '',
    date: '',
    tag: [],
    quantity: 1,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.expire = Number(Date.now());
      console.log(state.expire);
    },
    setForm: (state, action: PayloadAction<Partial<Form>>) => {
      state.form = { ...state.form, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setForm } = userSlice.actions;

export const userReducer = userSlice.reducer;
