import { configureStore } from '@reduxjs/toolkit';
import { taskApi } from '@/services/TaskServices';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [taskApi.reducerPath]: taskApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
