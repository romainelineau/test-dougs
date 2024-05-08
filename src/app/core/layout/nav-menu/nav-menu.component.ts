import { Component } from '@angular/core';
import { NAV_MENU_LINKS } from './nav-menu.data';
import { NavMenuLinkComponent } from './nav-menu-link/nav-menu-link.component';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [NavMenuLinkComponent],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  menu = NAV_MENU_LINKS;
}
