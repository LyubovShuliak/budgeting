import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createTransform, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authApi } from './api/auth-api';
import { shoppingListApi } from './api/shopping-api';
import { shoppingHistoryListApi } from './api/shopping-history-api';
import { userReducer } from './slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
export const store = configureStore({
  reducer: {
    user: persistedReducer,
    [shoppingListApi.reducerPath]: shoppingListApi.reducer,
    [shoppingHistoryListApi.reducerPath]: shoppingHistoryListApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      shoppingListApi.middleware,
      shoppingHistoryListApi.middleware,
      authApi.middleware,
    ]),
});
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
