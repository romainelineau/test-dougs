import { Component, Input } from '@angular/core';
import { MenuLink } from '../menu-link';

@Component({
  selector: 'app-nav-menu-link',
  standalone: true,
  imports: [],
  templateUrl: './nav-menu-link.component.html',
  styleUrl: './nav-menu-link.component.scss'
})
export class NavMenuLinkComponent {
  @Input() link!: MenuLink

}
