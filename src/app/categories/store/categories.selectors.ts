import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCategories from './categories.reducer';
import { GroupedCategory } from "../models/category-group.model";

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

export const selectCategoriesFilteredByGroup = createSelector(
    selectCategoriesState,
    (state) => {
        const groupedCategories: {[key: number]: GroupedCategory} = {};

        state.categories.forEach(category => {
            const groupId = category.group?.id;
            
            // Check if group already exists
            if (!groupedCategories[groupId] && groupId) {
                // Create group with empty categories array
                groupedCategories[groupId] = {
                    ...category.group,
                    categories: []
                };
            }
            
            // Push category to group
            groupedCategories[groupId].categories.push(category);
            
        });

        return Object.values(groupedCategories);
    }
);

export const selectCategoryIdSelected = createSelector(
    selectCategoriesState,
    (state) => state.categorySelected
);