import { MenuLink } from "./menu-link";
import { MenuLinkEnum } from "./menu-link.enum";

export const NAV_MENU_LINKS: MenuLink[] = [
    {
        value: MenuLinkEnum.CATEGORY_GROUP,
        label: 'Groupe de catégorie',
        icon: 'stack',
    },
    {
        value: MenuLinkEnum.ALPHABETICAL_ORDER,
        label: 'Ordre alphabétique',
        icon: 'sort-alpha-down',
    }
]