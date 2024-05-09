import { Component, OnInit } from '@angular/core';
import { CategoryFiltersComponent } from './category-filters/category-filters.component';
import { GroupCategoryListComponent } from './group-category-list/group-category-list.component';
import { Store } from '@ngrx/store';
import { LoadCategories } from './store/categories.actions';
import { Category } from './models/category.model';
import { selectCategories, selectCategoriesFilteredByGroup } from './store/categories.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { GroupedCategory } from './models/category-group.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryFiltersComponent, GroupCategoryListComponent, NgIf, AsyncPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  categories$!: Observable<Category[]>;
  groupedCategories$!: Observable<GroupedCategory[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(LoadCategories());
    this.categories$ = this.store.select(selectCategories);
    this.groupedCategories$ = this.store.select(selectCategoriesFilteredByGroup);
  }

}
