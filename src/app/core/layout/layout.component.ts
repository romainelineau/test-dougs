import { Component } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CategoriesComponent } from 'src/app/categories/categories.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavMenuComponent, CategoriesComponent, FooterComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

}
