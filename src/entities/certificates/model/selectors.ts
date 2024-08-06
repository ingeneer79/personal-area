import { RootState } from "@/app/store";

export const selectOrder = (state: RootState) => state.ordersStore;
/*
export const selectIngredientCountById =
  (ingredientId: string) => (state: RootState) => {
    if (state.constructorContent.bun === ingredientId) {
      return 2;
    }
    const count = state.constructorContent.ingredients.filter(
      (ingredient) => ingredient._id === ingredientId,
    ).length;
    return count;
  };
  */