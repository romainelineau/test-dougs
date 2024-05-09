import { createReducer, on } from "@ngrx/store";
import { MenuLinkEnum } from "src/app/core/layout/nav-menu/menu-link.enum";
import * as CategoryActions from "./categories.actions";
import { Category } from "../models/category.model";

export const featureKey = 'categories';

export interface CategoriesState {
    categorylistOrderSelected: MenuLinkEnum;
    categories: Category[];
    categorySelected: number | null;
    filters: {
        search: string | null;
        group: number | null;
    }
}

export const initialState: CategoriesState = {
    categorylistOrderSelected: MenuLinkEnum.CATEGORY_GROUP,
    categories: [],
    categorySelected: null,
    filters: {
        search: null,
        group: null,
    },
};

export const reducer = createReducer(
    initialState,
    on(CategoryActions.SetCategoryListOrder, (state, action): CategoriesState => ({
        ...state,
        categorylistOrderSelected: action.order,
    })),
    on(CategoryActions.LoadCategoriesSuccess, (state, action): CategoriesState => ({
        ...state,
        categories: action.categories,
    })),
    on(CategoryActions.SetCategorySelected, (state, { categoryId }): CategoriesState => ({
        ...state,
        categorySelected: state.categorySelected === categoryId ? null : categoryId,
    })),
    on(CategoryActions.SetSearchFilter, (state, { search }): CategoriesState => ({
        ...state,
        filters: {
            ...state.filters,
            search: search !== null ? String(search) : null,
        },
    }))
);