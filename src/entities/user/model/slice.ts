import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from './types';

interface UserState {
  userData: UserData | undefined
}

const initialState: UserState = {
  userData: undefined
};

export const userSlice = createSlice({
  name: "userStore",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData | undefined>) => {
      state.userData = action.payload
    }
  },
});

export const {
  setUserData,
} = userSlice.actions;

export default userSlice.reducer;

