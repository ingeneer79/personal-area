
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClassifierObject, ClassifierObjectItem } from './types';
import {classifiersApi} from '../api/api';

interface ClassifiersState {
  classifiers: ClassifierObject[];
}

const initialState: ClassifiersState = {
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

