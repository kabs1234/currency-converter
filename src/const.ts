export const API_KEY = import.meta.env.VITE_API_KEY as string;

export enum NameSpace {
  Currencies = 'Currencies',
  ConversionsHistory = 'ConversionsHistory',
}

export const NUMBER_REG_EXP = /^[0-9\b]+$/;
