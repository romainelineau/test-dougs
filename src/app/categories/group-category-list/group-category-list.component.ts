import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { GroupedCategory } from '../models/category-group.model';
import { Store } from '@ngrx/store';
import { SetCategorySelected } from '../store/categories.actions';
import { Observable } from 'rxjs';
import { selectCategoryIdSelected } from '../store/categories.selectors';

@Component({
  selector: 'app-group-category-list',
  standalone: true,
  imports: [NgClass, AsyncPipe, NgIf],
  templateUrl: './group-category-list.component.html',
  styleUrl: './group-category-list.component.scss'
})
export class GroupCategoryListComponent implements OnInit {
  @Input() groupedCategories!: GroupedCategory[];
  categoryIdSelected$!: Observable<number | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.categoryIdSelected$ = this.store.select(selectCategoryIdSelected);
  }

  onSelectCategory(categoryId: number): void {
    this.store.dispatch(SetCategorySelected({ categoryId }));
  }

}
