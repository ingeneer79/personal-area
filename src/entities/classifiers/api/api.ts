import { baseApi } from '@/shared/api';
import { apiMap } from '@/shared/model';
import { BrandObject } from '../model';

export const classifiersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getClassifiers: build.query<Array<BrandObject>, void>({
      query: () => ({
        url: apiMap.getClassifiers,
        method: 'GET',
      }),
      keepUnusedDataFor: Infinity,
      transformResponse: (response: { data: Array<BrandObject> }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetClassifiersQuery } = classifiersApi;