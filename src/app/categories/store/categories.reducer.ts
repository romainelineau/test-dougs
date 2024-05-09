import { createReducer, on } from "@ngrx/store";
import { MenuLinkEnum } from "src/app/core/layout/nav-menu/menu-link.enum";
import * as CategoryActions from "./categories.actions";
import { Category } from "../models/category.model";
import { GroupedCategory } from "../models/category-group.model";

export const featureKey = 'categories';

export interface CategoriesState {
    categorylistOrderSelected: MenuLinkEnum;
    categories: Category[];
    groups: GroupedCategory[];
    categorySelected: number | null;
    filters: {
        search: string;
        group: number | null;
    }
}

export const initialState: CategoriesState = {
    categorylistOrderSelected: MenuLinkEnum.CATEGORY_GROUP,
    categories: [],
    groups: [],
    categorySelected: null,
    filters: {
        search: '',
        group: null,
    },
};

export const reducer = createReducer(
    initialState,
    on(CategoryActions.SetCategoryListOrder, (state, action): CategoriesState => ({
        ...state,
        categorylistOrderSelected: action.order,
    })),
    on(CategoryActions.LoadCategoriesSuccess, (state, { categories, groups }): CategoriesState => ({
        ...state,
        categories,
        groups,
    })),
    on(CategoryActions.SetCategorySelected, (state, { categoryId }): CategoriesState => ({
        ...state,
        categorySelected: state.categorySelected === categoryId ? null : categoryId,
    })),
    on(CategoryActions.SetSearchFilter, (state, { search }): CategoriesState => ({
        ...state,
        filters: {
            ...state.filters,
            search,
        },
    })),
    on(CategoryActions.SetGroupFilter, (state, { group }): CategoriesState => ({
        ...state,
        filters: {
            ...state.filters,
            group,
        },
    }))
);