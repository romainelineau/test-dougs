import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { GroupedCategory } from '../models/category-group.model';

@Component({
  selector: 'app-group-category-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './group-category-list.component.html',
  styleUrl: './group-category-list.component.scss'
})
export class GroupCategoryListComponent {
  @Input() groupedCategories!: GroupedCategory[];

}
