import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PetitionsState {
  newPetition: boolean
}

const initialState: PetitionsState = {
    newPetition: false
};

export const petitionsSlice = createSlice({
  name: "petitionsStore",
  initialState,
  reducers: {
    addNewOrder: (state, action: PayloadAction<boolean>) => {
        state.newPetition = action.payload
    }
  },
});
