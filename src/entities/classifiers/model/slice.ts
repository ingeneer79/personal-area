
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClassifierObject } from './types';
import {classifiersApi} from '../api/api';

interface ConstructorState {
  classifiers: Array<{ id: string; classifier: ClassifierObject }>;
}

const initialState: ConstructorState = {
  classifiers: [],
};

export const classifiersSlice = createSlice({
  name: 'classifiers',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addMatcher(classifiersApi.endpoints.getClassifiers.matchFulfilled, (state, action: PayloadAction<ClassifierObject[]>) => {
      state.classifiers = action.payload.map((classifier) => ({ id: classifier.id.toString(), classifier }));
    })
  }
});

