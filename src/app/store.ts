import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

import { classifiersSlice } from "../entities/classifiers/model";
import { baseApi } from "@/shared/api";
import { ordersSlice } from "@/entities/catalog/model/slice";
import { catalogFiltersSlice } from "@/entities/catalog/ui/catalog-filter-with-search/model/slice";
import { waybillsFiltersSlice } from "@/entities/waybills/ui/waybills-filter/model/slice";
import { financeFiltersSlice } from "@/entities/finance/ui/finance-filter/model/slice";
import { userSlice } from "@/entities/user/model/slice";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(
  userSlice,
  classifiersSlice,
  ordersSlice,
  catalogFiltersSlice,
  waybillsFiltersSlice,
  financeFiltersSlice,
  {}
);
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const makeStore = () => {
  return configureStore({
    reducer: {
      rootReducer,
      [userSlice.name]: userSlice.reducer,
      [baseApi.reducerPath]: baseApi.reducer,
      [catalogFiltersSlice.name]: catalogFiltersSlice.reducer,
      [waybillsFiltersSlice.name]: waybillsFiltersSlice.reducer,
      [financeFiltersSlice.name]: financeFiltersSlice.reducer,      
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
