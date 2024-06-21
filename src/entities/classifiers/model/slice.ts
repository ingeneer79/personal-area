
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClassifierObject } from './types';
import {classifiersApi} from '../api/api';

interface ClassifierData {
    id: string;
    classifiers: ClassifierObject[];
}

interface ConstructorState {
  classifiers: ClassifierObject[];
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
      action.payload.forEach((classifier) => {
        state.classifiers.push(classifier)
      })
    })
  }
});

