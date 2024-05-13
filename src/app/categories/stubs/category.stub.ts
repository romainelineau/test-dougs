import { Category } from "../models/category.model";
import { groupStub } from "./group.stub";

const categoryStub1: Category = {
    id: 1,
    group: groupStub.group1,
    wording: 'Lorem ipsum dolor sit amet 1',
    description: 'Sed rutrum nisi ornare, gravida ante sit amet, consequat neque.',
}

const categoryStub2: Category = {
    id: 2,
    group: groupStub.group2,
    wording: 'Cras ultricies elit diam 2',
    description: 'Sed rutrum nisi ornare, gravida ante sit amet, consequat neque.',
}

const categoryStub3: Category = {
    id: 3,
    group: groupStub.group1,
    wording: 'Praesent vestibulum faucibus 3',
    description: 'Sed rutrum nisi ornare, gravida ante sit amet, consequat neque.',
}

const categoryStub4: Category = {
    id: 4,
    group: groupStub.group2,
    wording: 'Praesent tempus 4',
    description: '',
}

const categoriesStub = [categoryStub1, categoryStub2, categoryStub3, categoryStub4];

export const categoryStub = {
    get category1(): Category {
        return {...categoryStub1};
    },
    get category2(): Category {
        return {...categoryStub2};
    },
    get category3(): Category {
        return {...categoryStub3};
    },
    get category4(): Category {
        return {...categoryStub4};
    },
    get categories(): Category[] {
        return categoriesStub;
    }
}