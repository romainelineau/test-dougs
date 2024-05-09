import { Component, OnInit } from '@angular/core';
import { NAV_MENU_LINKS } from './nav-menu.data';
import { NavMenuLinkComponent } from './nav-menu-link/nav-menu-link.component';
import { Observable } from 'rxjs';
import { MenuLinkEnum } from './menu-link.enum';
import { AsyncPipe, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectMenuLinkSelected } from 'src/app/categories/store/categories.selectors';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [NavMenuLinkComponent, NgIf, AsyncPipe],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent implements OnInit {
  menu = NAV_MENU_LINKS;
  menuLinkSelected$!: Observable<MenuLinkEnum>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.menuLinkSelected$ = this.store.select(selectMenuLinkSelected);
  }
}
