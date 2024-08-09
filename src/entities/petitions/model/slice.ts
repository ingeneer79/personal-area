import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PetitionsState {
  newPetition: boolean
  newPetitionModalOpen: boolean

}

const initialState: PetitionsState = {
    newPetition: false,
    newPetitionModalOpen: false
};

export const petitionsSlice = createSlice({
  name: "petitionsStore",
  initialState,
  reducers: {
    addNewOrder: (state, action: PayloadAction<boolean>) => {
        state.newPetition = action.payload
    },
    setNewPetitionModalOpen: (state, action: PayloadAction<boolean>) => {
        state.newPetitionModalOpen = !action.payload
    }
  },
});
