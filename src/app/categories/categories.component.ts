import { Component, OnInit } from '@angular/core';
import { CategoryFiltersComponent } from './category-filters/category-filters.component';
import { GroupCategoryListComponent } from './group-category-list/group-category-list.component';
import { Store } from '@ngrx/store';
import { LoadCategories } from './store/categories.actions';
import { Category } from './models/category.model';
import { selectCategories } from './store/categories.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryFiltersComponent, GroupCategoryListComponent, AsyncPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  categories$!: Observable<Category[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(LoadCategories());
    this.categories$ = this.store.select(selectCategories);
  }

}
