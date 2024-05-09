import { Component, Input } from '@angular/core';
import { MenuLink } from '../menu-link';
import { MenuLinkEnum } from '../menu-link.enum';
import { Store } from '@ngrx/store';
import { SetMenuLinkSelected } from 'src/app/categories/store/categories.actions';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-nav-menu-link',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgClass],
  templateUrl: './nav-menu-link.component.html',
  styleUrl: './nav-menu-link.component.scss'
})
export class NavMenuLinkComponent {
  @Input() link!: MenuLink;
  @Input() linkSelected!: MenuLinkEnum;

  constructor(private store: Store) {}

  onSelectCategoryListOrder(link: MenuLinkEnum): void {
    this.store.dispatch(SetMenuLinkSelected({ link }));    
  }
}
