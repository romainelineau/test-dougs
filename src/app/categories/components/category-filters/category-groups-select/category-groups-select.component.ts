import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, distinctUntilChanged, takeUntil, tap } from 'rxjs';
import { GroupedCategory } from '../../../models/category-group.model';
import { selectGroups } from '../../../store/categories.selectors';
import { AsyncPipe } from '@angular/common';
import { SetGroupFilter } from '../../../store/categories.actions';

@Component({
  selector: 'app-category-groups-select',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './category-groups-select.component.html',
  styleUrl: './category-groups-select.component.scss'
})
export class CategoryGroupsSelectComponent implements OnInit, OnDestroy {
  DEFAULT_VALUE = "default";
  group = new FormControl(this.DEFAULT_VALUE);
  groups$!: Observable<GroupedCategory[]>;
  destroyed$ = new Subject<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initFormControlObservables();
  }

  initFormControlObservables(): void {
    this.group.valueChanges.pipe(
      distinctUntilChanged(),
      takeUntil(this.destroyed$),
      tap((groupSelected: string | null) => {
        const group = groupSelected === this.DEFAULT_VALUE ? null : Number(groupSelected);
        this.store.dispatch(SetGroupFilter({ group }))
      })
    ).subscribe();
    this.groups$ = this.store.select(selectGroups);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

}
