import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux';
import {AppDispatch, RootState} from '../redux/Store';

// Create a custom hook to provide access to the dispatch function with correct types
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Create a custom hook to provide access to the selector with correct types
// TypedUseSelectorHook is a generic hook provided by react-redux to ensure type safety
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {default as useBasicFunctions} from './useBasicFunctions';
