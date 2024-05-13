import { MenuLinkEnum } from "src/app/core/layout/nav-menu/menu-link.enum";
import { CategoriesState } from "./categories.reducer";
import { categoryStub } from "../stubs/category.stub";
import { groupStub } from "../stubs/group.stub";
import * as CategoriesSelectors from "./categories.selectors";

describe("CategoriesSelectors", () => {
    const initialState: CategoriesState = { 
        menuLinkSelected: MenuLinkEnum.ALPHABETICAL_ORDER,
        categories: categoryStub.categories,
        groups: groupStub.groups,
        categorySelected: groupStub.group2.id,
        filters: {
            search: '',
            group: null,
        },
      };

    it("should select the menu link selected", () => {
        const linkSelected = CategoriesSelectors.selectMenuLinkSelected.projector(initialState);
        expect(linkSelected).toEqual(initialState.menuLinkSelected);
    });

    it("should select categories", () => {
        const categories = CategoriesSelectors.selectCategories.projector(initialState);
        expect(categories).toEqual(initialState.categories);
    });

    it("should select category selected", () => {
        const categorySelected = CategoriesSelectors.selectCategoryIdSelected.projector(initialState);
        expect(categorySelected).toEqual(initialState.categorySelected);
    });

    it("should select groups", () => {
        const groups = CategoriesSelectors.selectGroups.projector(initialState);
        expect(groups).toEqual(initialState.groups);
    });

    it("should select filters", () => {
        const filters = CategoriesSelectors.selectFilters.projector(initialState);
        expect(filters).toEqual(initialState.filters);
    });

    it("should select categories filtered by search - with search filter empty", () => {
        const categoriesFiltered = CategoriesSelectors.selectCategoriesFilteredBySearch.projector(initialState.categories, initialState.filters);
        expect(categoriesFiltered).toEqual(initialState.categories);
    });

    it("should select categories filtered by search - with search filter", () => {
        const filters = {
            search: '2',
            group: null,
        }
        const categoriesExpected = initialState.categories.filter((category) => category.wording.toLocaleLowerCase().includes(filters.search.toLocaleLowerCase()));
        const categoriesFiltered = CategoriesSelectors.selectCategoriesFilteredBySearch.projector(initialState.categories, filters);
        expect(categoriesFiltered).toEqual(categoriesExpected);
    });

    it("should select categories filtered by group - with group filter empty", () => {
        const categoriesFiltered = CategoriesSelectors.selectCategoriesFilteredByGroup.projector(initialState.categories, initialState.filters);
        expect(categoriesFiltered).toEqual(initialState.categories);
    });

    it("should select categories filtered by group - with group filter", () => {
        const filters = {
            search: '',
            group: groupStub.group2.id,
        }
        const categoriesExpected = initialState.categories.filter((category) => category.group?.id === filters.group);
        const categoriesFiltered = CategoriesSelectors.selectCategoriesFilteredByGroup.projector(initialState.categories, filters);
        expect(categoriesFiltered).toEqual(categoriesExpected);
    });

    it("should select categories alphabetically ordered", () => {
        const categoriesExpected = [...initialState.categories].sort((a, b) => a.wording.localeCompare(b.wording));
        const categoriesFiltered = CategoriesSelectors.selectAlphabeticallyOrderedCategories.projector(initialState.categories);
        expect(categoriesFiltered).toEqual(categoriesExpected);
    });

    it("should select categories group ordered", () => {
        const groups = [...initialState.groups].map((group) => ({
            ...group,
            categories: initialState.categories.filter((category) => category.group?.id === group.id)
        }));

        const groupedCategoriesExpected = groups.filter((group) => group.categories.length);

        const groupedCategoriesFiltered = CategoriesSelectors.selectGroupOrderedCategories.projector(initialState.categories, initialState.groups);
        expect(groupedCategoriesFiltered).toEqual(groupedCategoriesExpected);
    });

    it("should select categories group ordered with right number of groups", () => {
        const groupedCategoriesFiltered = CategoriesSelectors.selectGroupOrderedCategories.projector(initialState.categories, initialState.groups);
        expect(groupedCategoriesFiltered.length).toEqual(initialState.groups.length);
    });
});