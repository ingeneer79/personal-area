import { baseApi } from '@/shared/api';
import { apiMap } from '@/shared/model';
import { ClassifierObject } from '../model';

export const classifiersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getClassifiers: build.query<Array<ClassifierObject>, void>({
      query: () => ({
        url: apiMap.getClassifiers,
        method: 'GET',
      }),
      keepUnusedDataFor: Infinity,
      transformResponse: (response: { data: Array<ClassifierObject> }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetClassifiersQuery } = classifiersApi;