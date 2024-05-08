import { createReducer } from "@ngrx/store";

export const featureKey = 'categories';

export interface CategoriesState {
}

export const initialState: CategoriesState = {
};

export const reducer = createReducer(initialState);