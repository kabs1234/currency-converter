import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export type Conversion = {
  amount: number;
  from: string;
  to: string;
  result: number;
  date: string;
};

export type ConversionsHistorySlice = {
  history: Conversion[];
};

const initialState: ConversionsHistorySlice = {
  history: [],
};

export const convertionsHistorySlice = createSlice({
  name: NameSpace.ConversionsHistory,
  initialState,
  reducers: {
    recordConversionAction(state, action: PayloadAction<Conversion>) {
      const conversion = action.payload;

      state.history.push(conversion);
    },
  },
});

export const { recordConversionAction } = convertionsHistorySlice.actions;
