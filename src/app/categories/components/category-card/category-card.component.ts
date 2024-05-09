import { AsyncPipe, NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCategoryIdSelected } from '../../store/categories.selectors';
import { SetCategorySelected } from '../../store/categories.actions';
import { GroupCategoryBadgeComponent } from '../group-category-badge/group-category-badge.component';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [NgClass, AsyncPipe, GroupCategoryBadgeComponent],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent implements OnInit {
  @Input() category!: Category;
  @Input() displayBadge: boolean = false;
  categoryIdSelected$!: Observable<number | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.categoryIdSelected$ = this.store.select(selectCategoryIdSelected);
  }

  onSelectCategory(categoryId: number): void {
    this.store.dispatch(SetCategorySelected({ categoryId }));
  }

}
