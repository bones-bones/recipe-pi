import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { recipeSlice, name } from './recipe';

export const store = configureStore({
    reducer: combineReducers({
        [name]: recipeSlice.reducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
