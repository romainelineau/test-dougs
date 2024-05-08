import { createAction, props } from "@ngrx/store";
import { MenuLinkEnum } from "src/app/core/layout/nav-menu/menu-link.enum";
import { Category } from "../models/category.model";

export const SetCategoryListOrder = createAction(
    '[Nav Menu Link Component] Set Category List Order',
    props<{ order: MenuLinkEnum}>(),
);

export const LoadCategories = createAction(
    '[Categories Component] Load Categories',
);

export const LoadCategoriesSuccess = createAction(
    '[@Effect Load Categories] Load Categories Success',
    props<{ categories: Category[] }>(),
);

export const LoadCategoriesFailure = createAction(
    '[@Effect Load Categories] Load Categories Failure',
);