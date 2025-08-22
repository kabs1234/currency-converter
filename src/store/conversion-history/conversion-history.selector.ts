import { NameSpace } from '../../const';
import type { storeState } from '../../types/store';
import type { Conversion } from './conversion-history.slice';

export const getConversionsHistory = (state: storeState): Conversion[] => {
  return state[NameSpace.ConversionsHistory].history;
};
