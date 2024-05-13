import { MenuLinkEnum } from 'src/app/core/layout/nav-menu/menu-link.enum';
import * as fromReducer from './categories.reducer';
import * as CategoryActions from './categories.actions';
import { categoryStub } from '../stubs/category.stub';
import { groupStub } from '../stubs/group.stub';

describe('CategoriesReducer', () => {

    describe('Unknown action', () => {
        const { initialState } = fromReducer;
        it('should return the default state', () => {
            const action = {
                type: 'Unknown',
            };
            const state = fromReducer.reducer(initialState, action);
    
            expect(state).toBe(initialState);
        });
    });
  
    describe('SetMenuLinkSelected action', () => {
        const { initialState } = fromReducer;
        it('should update the state with new menu link selected', () => {
            const newState: fromReducer.CategoriesState = {
                ...initialState,
                menuLinkSelected: MenuLinkEnum.ALPHABETICAL_ORDER,
            };
            const action = CategoryActions.SetMenuLinkSelected({ link: MenuLinkEnum.ALPHABETICAL_ORDER });
            const state = fromReducer.reducer(initialState, action);
    
            expect(state).toEqual(newState);
            expect(state).not.toBe(initialState);
        });
    });

    describe('LoadCategoriesSuccess action', () => {
        const { initialState } = fromReducer;
        it('should update the state with categories and groups', () => {
          const newState: fromReducer.CategoriesState = {
              ...initialState,
              categories: categoryStub.categories,
              groups: groupStub.groups,
          };
          const action = CategoryActions.LoadCategoriesSuccess({ categories: categoryStub.categories, groups: groupStub.groups });
          const state = fromReducer.reducer(initialState, action);
    
          expect(state).toEqual(newState);
          expect(state).not.toBe(initialState);
          expect(state.categories.length).toEqual(newState.categories.length);
          expect(state.groups.length).toEqual(newState.groups.length);
        });
    });

    describe('SetCategorySelected action', () => {
        const { initialState } = fromReducer;
        it('should update the state with new category id selected', () => {
            const action = CategoryActions.SetCategorySelected({ categoryId: categoryStub.category1.id });
            const state = fromReducer.reducer(initialState, action);

            expect(state.categorySelected).toEqual(categoryStub.category1.id);
            expect(state).not.toBe(initialState);
        });

        it('should category id selected in the state if id is the same', () => {
            const newInitialState = {
                ...initialState,
                categorySelected: categoryStub.category1.id,
            }
            const action = CategoryActions.SetCategorySelected({ categoryId: categoryStub.category1.id });
            const state = fromReducer.reducer(newInitialState, action);

            expect(state.categorySelected).toBeNull();
            expect(state).not.toBe(newInitialState);
        });
    });

    describe('SetSearchFilter action', () => {
        const { initialState } = fromReducer;
        it('should update the state with search filter', () => {
          const action = CategoryActions.SetSearchFilter({ search: "test" });
          const state = fromReducer.reducer(initialState, action);
    
          expect(state.filters.search).toEqual("test");
          expect(state).not.toBe(initialState);
        });
    });

    describe('SetGroupFilter action', () => {
        const { initialState } = fromReducer;
        it('should update the state with search filter', () => {
          const action = CategoryActions.SetGroupFilter({ group: groupStub.group1.id });
          const state = fromReducer.reducer(initialState, action);
    
          expect(state.filters.group).toEqual(groupStub.group1.id);
          expect(state).not.toBe(initialState);
        });
    });
  });