import { Category } from "./category.model";

export interface CategoryGroup {
    id: number;
    name: string;
    color: string;
}

export interface GroupedCategory extends CategoryGroup {
    categories: Category[];
}