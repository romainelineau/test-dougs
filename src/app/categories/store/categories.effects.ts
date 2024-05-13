import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, combineLatest, map, of, switchMap } from "rxjs";
import { CategoriesService } from "../services/categories.service";
import { Category } from "../models/category.model";
import { VisibleCategory } from "../models/visible-category.model";
import { Group } from "../models/group.model";
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
                map(([allCategories, visibleCategoryIds]) => {
                    const visibleCategories = this.filterVisibleCategories(allCategories, visibleCategoryIds);
                    const categories = this.formatGroupCategories(visibleCategories);
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

    private formatGroupCategories(categories: Category[]): Category[] {
        return categories.map((categorie) => ({
            ...categorie, 
            group: {...categorie.group!, color: categorie.group?.color ?? ''}
        }))
    }

    private getGroups(categories: Category[]): Group[] {
        const groupedCategories: {[key: number]: Group} = {};

        categories.forEach(category => {
            const groupId = category.group?.id;
            
            if (groupId && !groupedCategories[groupId]) {
                groupedCategories[groupId] = {
                    ...category.group,
                } as Group;
            }
        });

        return Object.values(groupedCategories);
    }

    constructor(private actions$: Actions, private categoriesService: CategoriesService) {}
    
}