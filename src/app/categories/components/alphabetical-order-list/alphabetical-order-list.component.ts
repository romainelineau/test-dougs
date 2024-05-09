import { Component, Input } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryCardComponent } from '../category-card/category-card.component';

@Component({
  selector: 'app-alphabetical-order-list',
  standalone: true,
  imports: [CategoryCardComponent],
  templateUrl: './alphabetical-order-list.component.html',
})
export class AlphabeticalOrderListComponent {
  @Input() categories!: Category[];

}
