import type { rootReducer } from '../store/root-reducer';
import type { store } from '../store/store';

export type storeState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
