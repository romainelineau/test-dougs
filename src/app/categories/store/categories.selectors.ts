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

export const selectFilters = createSelector(
    selectCategoriesState,
    (state) => state.filters
);

export const selectCategoriesFilteredBySearch = createSelector(
    selectCategories,
    selectFilters,
    (categories, { search }) => {
        if (search) {
            return categories.filter((category) => category.wording.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        }

        return categories;
    }
);

export const selectCategoriesFilteredByGroup = createSelector(
    selectCategoriesFilteredBySearch,
    selectFilters,
    (categories, { group }) => {
        if (group !== null) {
            return categories.filter((category) => category.group.id === group)
        }

        return categories;
    }
);

export const selectAlphabeticallyOrderedCategories = createSelector(
    selectCategoriesFilteredByGroup,
    (categories) => {
        const categoriesSorted = [...categories];
        
        return categoriesSorted.sort((a, b) => a.wording.localeCompare(b.wording))
    }
);

export const selectGroupOrderedCategories = createSelector(
    selectCategoriesFilteredByGroup,
    (categories) => {
        const groupedCategories: {[key: number]: GroupedCategory} = {};

        categories.forEach(category => {
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

export const selectGroups = createSelector(
    selectCategoriesState,
    (state) => state.groups
);