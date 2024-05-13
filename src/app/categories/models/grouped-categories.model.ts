import { Category } from "./category.model";
import { Group } from "./group.model";

export interface GroupedCategories extends Group {
    categories: Category[];
}