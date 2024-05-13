import { createAction, props } from "@ngrx/store";
import { MenuLinkEnum } from "src/app/core/layout/nav-menu/menu-link.enum";
import { Category } from "../models/category.model";
import { Group } from "../models/group.model";

export const SetMenuLinkSelected = createAction(
    '[Nav Menu Link Component] Set Menu Link Selected',
    props<{ link: MenuLinkEnum}>(),
);

export const LoadCategories = createAction(
    '[Categories Component] Load Categories',
);

export const LoadCategoriesSuccess = createAction(
    '[@Effect Load Categories] Load Categories Success',
    props<{ categories: Category[]; groups: Group[] }>(),
);

export const LoadCategoriesFailure = createAction(
    '[@Effect Load Categories] Load Categories Failure',
);

export const SetCategorySelected = createAction(
    '[Group Category List Component] Set Category Selected',
    props<{ categoryId: number }>(),
);

export const SetSearchFilter = createAction(
    '[Category Search Component] Set Search Filter',
    props<{ search: string }>(),
);

export const SetGroupFilter = createAction(
    '[Groups Select Component] Set Group Filter',
    props<{ group: number | null }>(),
);