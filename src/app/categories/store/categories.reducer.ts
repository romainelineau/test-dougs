import { createReducer, on } from "@ngrx/store";
import { MenuLinkEnum } from "src/app/core/layout/nav-menu/menu-link.enum";
import * as CategoryActions from "./categories.actions";

export const featureKey = 'categories';

export interface CategoriesState {
    categorylistOrderSelected: MenuLinkEnum;
}

export const initialState: CategoriesState = {
    categorylistOrderSelected: MenuLinkEnum.CATEGORY_GROUP
};

export const reducer = createReducer(
    initialState,
    on(CategoryActions.SetCategoryListOrder, (state, action): CategoriesState => ({
        ...state,
        categorylistOrderSelected: action.order,
    }))
);