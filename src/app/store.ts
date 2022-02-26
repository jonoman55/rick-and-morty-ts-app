import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rickAndMortyApi } from '../services/rickAndMortyApi';
import { appSlice } from '../features/appSlice';
import { themeSlice } from '../features/themeSlice';

export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        theme: themeSlice.reducer,
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(
        rickAndMortyApi.middleware,
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
