import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesComponent } from './categories.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MenuLinkEnum } from '../core/layout/nav-menu/menu-link.enum';
import { CategoriesState } from './store/categories.reducer';
import { categoryStub } from './stubs/category.stub';
import { groupStub } from './stubs/group.stub';
import { selectCategoriesFilteredByGroup, selectGroups, selectMenuLinkSelected } from './store/categories.selectors';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let store: MockStore;

  const initialState: CategoriesState = { 
    menuLinkSelected: MenuLinkEnum.ALPHABETICAL_ORDER,
    categories: categoryStub.categories,
    groups: groupStub.groups,
    categorySelected: null,
    filters: {
        search: '',
        group: null,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesComponent],
      providers: [provideMockStore({ initialState })],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    store.overrideSelector(selectGroups, initialState.groups);
    store.overrideSelector(selectCategoriesFilteredByGroup, initialState.categories);
    store.overrideSelector(selectMenuLinkSelected, initialState.menuLinkSelected);

    store.refreshState();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display alphabetically ordered list', () => {
    const list = fixture.debugElement.nativeElement.querySelector('app-alphabetical-order-list');
    expect(list).toBeTruthy();
  });

  it('should display group category list', () => {
    store.overrideSelector(selectMenuLinkSelected, MenuLinkEnum.CATEGORY_GROUP);
    store.refreshState();
    fixture.detectChanges();
    const list = fixture.debugElement.nativeElement.querySelector('app-group-category-list');
    expect(list).toBeTruthy();
  });
});
