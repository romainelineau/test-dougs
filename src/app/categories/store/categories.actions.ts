import { createAction, props } from "@ngrx/store";
import { MenuLinkEnum } from "src/app/core/layout/nav-menu/menu-link.enum";

export const SetCategoryListOrder = createAction(
    '[Nav Menu Link Component] Set Category List Order',
    props<{ order: MenuLinkEnum}>(),
)