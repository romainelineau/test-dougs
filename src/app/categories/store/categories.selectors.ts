import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCategories from './categories.reducer';

export const selectCategoriesState = createFeatureSelector<fromCategories.CategoriesState>(
    fromCategories.featureKey,
);

export const selectCategoryListOrderActive = createSelector(
    selectCategoriesState,
    (state) => state.categorylistOrderSelected
);

export const selectCategories = createSelector(
    selectCategoriesState,
    (state) => state.categories
);