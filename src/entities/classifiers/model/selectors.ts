import { RootState } from '../../../app/store';
export const selectClassifier = (state: RootState) => state.classifiers;

export const selectClassifierById =
  (classifierId: string) => (state: RootState) => {
    const count = state.classifiers.classifiers.filter(
      (classifier) => classifier.id === classifierId,
    ).length;
    return count;
  };