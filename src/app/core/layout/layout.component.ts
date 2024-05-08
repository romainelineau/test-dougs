import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CategoriesComponent } from 'src/app/categories/categories.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent, CategoriesComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
