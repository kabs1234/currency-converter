import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export type Conversion = {
  amount: number;
  from: string;
  to: string;
  result: number;
  date: Date;
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
  reducers: {},
});
