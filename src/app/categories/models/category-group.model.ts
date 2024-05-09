import { Category } from "./category.model";

export interface Group {
    id: number;
    name: string;
    color: string;
}

export interface GroupedCategory extends Group {
    categories: Category[];
}