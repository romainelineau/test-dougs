import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, distinctUntilChanged, takeUntil, tap } from 'rxjs';
import { SetSearchFilter } from '../../store/categories.actions';

@Component({
  selector: 'app-category-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './category-search.component.html',
  styleUrl: './category-search.component.scss'
})
export class CategorySearchComponent implements OnInit, OnDestroy {
  search = new FormControl('');
  destroyed$ = new Subject<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      distinctUntilChanged(),
      takeUntil(this.destroyed$),
      tap((value) => {
        const search = value ?? '';
        this.store.dispatch(SetSearchFilter({ search }))
      })
    ).subscribe();  
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

}
