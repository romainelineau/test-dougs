import { GroupedCategories } from "../models/grouped-categories.model";
import { categoryStub } from "./category.stub";
import { groupStub } from "./group.stub";

const groupedCategoryStub1: GroupedCategories = {
    ...groupStub.group1,
    categories: [
        categoryStub.category1,
        categoryStub.category2
    ],
}

const groupedCategoryStub2: GroupedCategories = {
    ...groupStub.group1,
    categories: [
        categoryStub.category1,
        categoryStub.category2
    ],
}

export const groupedCategoryStub = {
    get groupedCategory1(): GroupedCategories {
        return {...groupedCategoryStub1};
    },
    get groupedCategory2(): GroupedCategories {
        return {...groupedCategoryStub2};
    }
}