import { Component, Input } from '@angular/core';
import { GroupedCategory } from '../models/category-group.model';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { GroupCategoryBannerComponent } from '../group-category-banner/group-category-banner.component';

@Component({
  selector: 'app-group-category-list',
  standalone: true,
  imports: [CategoryCardComponent, GroupCategoryBannerComponent],
  templateUrl: './group-category-list.component.html',
  styleUrl: './group-category-list.component.scss'
})
export class GroupCategoryListComponent {
  @Input() groupedCategories!: GroupedCategory[];

}
