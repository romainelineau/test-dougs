import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, combineLatest, map, of, switchMap } from "rxjs";
import { CategoriesService } from "../services/categories.service";
import * as CategoryActions from "./categories.actions";
import { Category } from "../models/category.model";
import { VisibleCategory } from "../models/visible-category.model";

@Injectable()
export class CategoriesEffects {
    loadCategories$ = createEffect(() =>
        { return this.actions$.pipe(
          ofType(CategoryActions.LoadCategories),
          switchMap(() =>
            combineLatest([
                this.categoriesService.getAllCategories(),
                this.categoriesService.getVisibleCategories()
            ]).pipe(
                map(([allCategories, visibleCategories]) => {
                    const categories = this.filterVisibleCategories(allCategories, visibleCategories);

                    return CategoryActions.LoadCategoriesSuccess({ categories })}
                ),
                catchError(() => of(CategoryActions.LoadCategoriesFailure())),
            ),
          ),
        )},
    );

    private filterVisibleCategories(allCategories: Category[], visibleCategories: VisibleCategory[]): Category[] {
        return allCategories.filter((categorie) => visibleCategories.find((visibleCategory) => visibleCategory.id === categorie.id));
    }

    constructor(private actions$: Actions, private categoriesService: CategoriesService) {}
    
}