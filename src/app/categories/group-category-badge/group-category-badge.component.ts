import { Component, Input } from '@angular/core';
import { CategoryGroup } from '../models/category-group.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-group-category-badge',
  standalone: true,
  imports: [NgClass],
  templateUrl: './group-category-badge.component.html',
  styleUrl: './group-category-badge.component.scss'
})
export class GroupCategoryBadgeComponent {
  @Input() group!: CategoryGroup;

}
