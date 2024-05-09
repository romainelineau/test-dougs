import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { SetCategorySelected } from '../store/categories.actions';
import { selectCategoryIdSelected } from '../store/categories.selectors';

@Component({
  selector: 'app-alphabetical-order-list',
  standalone: true,
  imports: [NgClass, NgIf, AsyncPipe],
  templateUrl: './alphabetical-order-list.component.html',
  styleUrl: './alphabetical-order-list.component.scss'
})
export class AlphabeticalOrderListComponent implements OnInit {
  @Input() categories!: Category[];
  categoryIdSelected$!: Observable<number | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.categoryIdSelected$ = this.store.select(selectCategoryIdSelected);
  }

  onSelectCategory(categoryId: number): void {
    this.store.dispatch(SetCategorySelected({ categoryId }));
  }

}
