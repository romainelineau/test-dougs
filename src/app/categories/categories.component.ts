import { Component } from '@angular/core';
import { CategoryFiltersComponent } from './category-filters/category-filters.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryFiltersComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

}
