import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { postsApi } from "../services"
import userEmailReducer from "./reducers/userSlice"
import postsReducer from "./reducers/postSlice"

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    userState: userEmailReducer,
    postsState: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export default store
