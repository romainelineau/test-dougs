import { Component, Input } from '@angular/core';
import { Group } from '../../models/category-group.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-group-category-banner',
  standalone: true,
  imports: [NgClass],
  templateUrl: './group-category-banner.component.html',
  styleUrl: './group-category-banner.component.scss'
})
export class GroupCategoryBannerComponent {
  @Input() group!: Group;

}
