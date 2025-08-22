/* eslint-disable no-restricted-imports */
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, storeState } from '../types/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<storeState>();
