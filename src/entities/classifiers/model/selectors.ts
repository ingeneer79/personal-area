import { RootState } from '../../../app/store';
import { ClassifierObject } from './types';
export const selectClassifier = (state: RootState) => state.classifiers;

export const selectClassifierById =
  (classifierId: string) => (state: RootState): ClassifierObject | undefined => {
    return state.classifiers.classifiers.find(
      (classifier) => classifier.id === classifierId,
    );
  };