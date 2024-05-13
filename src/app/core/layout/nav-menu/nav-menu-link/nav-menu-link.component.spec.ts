import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMenuLinkComponent } from './nav-menu-link.component';
import { Store } from '@ngrx/store';
import { MockStore } from 'src/app/categories/store/store.mock';
import { MenuLinkEnum } from '../menu-link.enum';
import { NAV_MENU_LINKS } from '../nav-menu.data';
import { SetMenuLinkSelected } from 'src/app/categories/store/categories.actions';

describe('NavMenuLinkComponent', () => {
  let component: NavMenuLinkComponent;
  let fixture: ComponentFixture<NavMenuLinkComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuLinkComponent],
      providers: [{
        provide: Store,
        useClass: MockStore,
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavMenuLinkComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    component.link =  NAV_MENU_LINKS[1];
    component.linkSelected =  MenuLinkEnum.ALPHABETICAL_ORDER;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display link label', () => {
    const label = fixture.nativeElement.querySelector('button');
    expect(label.textContent).toContain(NAV_MENU_LINKS[1].label);
  });

  it('should have active class if link is selected', () => {
    const label = fixture.nativeElement.querySelector('button');
    expect(label).toHaveClass('is-active');
  });

  it('should have right icon', () => {
    const icon = fixture.nativeElement.querySelector('button i');
    expect(icon).toHaveClass(`bi-${NAV_MENU_LINKS[1].icon}`);
  });

  it('should emit select button event with link info when click', () => {
    spyOn(component, 'onSelectCategoryListOrder');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.onSelectCategoryListOrder).toHaveBeenCalledWith(MenuLinkEnum.ALPHABETICAL_ORDER);
  });

  it('should dispatch select menu action', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    const action = SetMenuLinkSelected({ link: MenuLinkEnum.ALPHABETICAL_ORDER });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
