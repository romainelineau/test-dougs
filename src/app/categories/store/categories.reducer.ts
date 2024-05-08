import { createReducer, on } from "@ngrx/store";
import { MenuLinkEnum } from "src/app/core/layout/nav-menu/menu-link.enum";
import * as CategoryActions from "./categories.actions";
import { Category } from "../models/category.model";

export const featureKey = 'categories';

export interface CategoriesState {
    categorylistOrderSelected: MenuLinkEnum;
    categories: Category[];
}

export const initialState: CategoriesState = {
    categorylistOrderSelected: MenuLinkEnum.CATEGORY_GROUP,
    categories: []
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
    }))
);