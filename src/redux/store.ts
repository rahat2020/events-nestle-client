import { configureStore } from '@reduxjs/toolkit'
import { apis } from './api/apiSlice'

export const store = configureStore({
  reducer: {
    [apis.reducerPath]: apis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apis.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch