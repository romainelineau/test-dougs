import { Component, Input } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-group-category-list',
  standalone: true,
  imports: [],
  templateUrl: './group-category-list.component.html',
  styleUrl: './group-category-list.component.scss'
})
export class GroupCategoryListComponent {
  @Input() categories!: Category[] | null;

}
