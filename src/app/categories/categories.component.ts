import { Component, OnInit } from '@angular/core';
import { CategoryFiltersComponent } from './category-filters/category-filters.component';
import { GroupCategoryListComponent } from './group-category-list/group-category-list.component';
import { Store } from '@ngrx/store';
import { LoadCategories } from './store/categories.actions';
import { Category } from './models/category.model';
import * as CategorySelectors from './store/categories.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { GroupedCategory } from './models/category-group.model';
import { MenuLinkEnum } from '../core/layout/nav-menu/menu-link.enum';
import { AlphabeticalOrderListComponent } from './alphabetical-order-list/alphabetical-order-list.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryFiltersComponent, GroupCategoryListComponent, AlphabeticalOrderListComponent, NgIf, AsyncPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  groupedCategories$!: Observable<GroupedCategory[]>;
  alphabeticallyOrderedCategories$!: Observable<Category[]>;
  categorylistOrderSelected$!: Observable<MenuLinkEnum>;
  MENU_LINKS = MenuLinkEnum;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(LoadCategories());
    this.groupedCategories$ = this.store.select(CategorySelectors.selectCategoriesFilteredByGroup);
    this.alphabeticallyOrderedCategories$ = this.store.select(CategorySelectors.selectAlphabeticallyOrderedCategories);
    this.categorylistOrderSelected$ = this.store.select(CategorySelectors.selectCategoryListOrderActive);
  }

}
