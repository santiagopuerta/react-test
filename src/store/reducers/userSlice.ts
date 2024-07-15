import { createSlice } from "@reduxjs/toolkit"
import { UserState } from "../../interfaces"
import { PayloadAction } from "@reduxjs/toolkit"

const initialState: UserState = {
  userEmail: null,
}

const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUserEmail: (state: UserState, action: PayloadAction<string>) => {
      state.userEmail = action.payload
    },
    clearUserEmail: (state: UserState) => {
      state.userEmail = null
    },
  },
})

export const { setUserEmail, clearUserEmail } = userSlice.actions
export default userSlice.reducer
