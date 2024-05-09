import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, combineLatest, map, of, switchMap } from "rxjs";
import { CategoriesService } from "../services/categories.service";
import { Category } from "../models/category.model";
import { VisibleCategory } from "../models/visible-category.model";
import { GroupedCategory } from "../models/category-group.model";
import * as CategoryActions from "./categories.actions";

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
                    const groups = this.getGroups(categories);

                    return CategoryActions.LoadCategoriesSuccess({ categories, groups })}
                ),
                catchError(() => of(CategoryActions.LoadCategoriesFailure())),
            ),
          ),
        )},
    );

    private filterVisibleCategories(allCategories: Category[], visibleCategories: VisibleCategory[]): Category[] {
        return allCategories.filter((categorie) => visibleCategories.find((visibleCategory) => visibleCategory.id === categorie.id));
    }

    private getGroups(categories: Category[]): GroupedCategory[] {
        const groupedCategories: {[key: number]: GroupedCategory} = {};

        categories.forEach(category => {
            const groupId = category.group?.id;
            
            if (!groupedCategories[groupId] && groupId) {
                groupedCategories[groupId] = {
                    ...category.group,
                    categories: []
                };
            }
        });

        return Object.values(groupedCategories);
    }

    constructor(private actions$: Actions, private categoriesService: CategoriesService) {}
    
}