import { Component } from '@angular/core';
import { CategorySearchComponent } from './category-search/category-search.component';
import { CategoryGroupsSelectComponent } from './category-groups-select/category-groups-select.component';

@Component({
  selector: 'app-category-filters',
  standalone: true,
  imports: [CategorySearchComponent, CategoryGroupsSelectComponent],
  templateUrl: './category-filters.component.html',
  styleUrl: './category-filters.component.scss'
})
export class CategoryFiltersComponent {

}
