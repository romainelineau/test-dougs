import { Group } from "./category-group.model";

export interface Category {
    id: number;
    group: Group;
    wording: string;
    description: string;
}