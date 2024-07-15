import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { postsApi } from "../services"
import userEmailReducer from "./reducers/userSlice"

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    userState: userEmailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export default store
