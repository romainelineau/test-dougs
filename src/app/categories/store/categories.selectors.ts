import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCategories from './categories.reducer';
import { GroupedCategories } from "../models/grouped-categories.model";

export const selectCategoriesState = createFeatureSelector<fromCategories.CategoriesState>(
    fromCategories.featureKey,
);

export const selectMenuLinkSelected = createSelector(
    selectCategoriesState,
    (state) => state.menuLinkSelected
);

export const selectCategories = createSelector(
    selectCategoriesState,
    (state) => state.categories
);

export const selectCategoryIdSelected = createSelector(
    selectCategoriesState,
    (state) => state.categorySelected
);

export const selectGroups = createSelector(
    selectCategoriesState,
    (state) => state.groups
);

export const selectFilters = createSelector(
    selectCategoriesState,
    (state) => state.filters
);

export const selectCategoriesFilteredBySearch = createSelector(
    selectCategories,
    selectFilters,
    (categories, { search }) => {
        return !search ? categories : categories.filter((category) => category.wording.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
);

export const selectCategoriesFilteredByGroup = createSelector(
    selectCategoriesFilteredBySearch,
    selectFilters,
    (categories, { group }) => {
        return group === null ? categories : categories.filter((category) => category.group?.id === group);
    }
);

export const selectAlphabeticallyOrderedCategories = createSelector(
    selectCategoriesFilteredByGroup,
    (categories) => [...categories].sort((a, b) => a.wording.localeCompare(b.wording))
);

export const selectGroupOrderedCategories = createSelector(
    selectCategoriesFilteredByGroup,
    selectGroups,
    (categories, groups) => {

        const groupedCategories: GroupedCategories[] = [...groups].map((group) => ({
            ...group,
            categories: categories.filter((category) => category.group?.id === group.id)
        }))

        return groupedCategories.filter((group) => group.categories.length);
    }
);