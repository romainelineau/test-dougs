import { Component, Input } from '@angular/core';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { GroupCategoryBannerComponent } from '../group-category-banner/group-category-banner.component';
import { GroupedCategories } from '../../models/grouped-categories.model';

@Component({
  selector: 'app-group-category-list',
  standalone: true,
  imports: [CategoryCardComponent, GroupCategoryBannerComponent],
  templateUrl: './group-category-list.component.html',
})
export class GroupCategoryListComponent {
  @Input() groupedCategories!: GroupedCategories[];

}
