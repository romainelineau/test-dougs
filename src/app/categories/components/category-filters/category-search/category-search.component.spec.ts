import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategorySearchComponent } from './category-search.component';
import { Store } from '@ngrx/store';
import { MockStore } from 'src/app/categories/store/store.mock';
import { SetSearchFilter } from 'src/app/categories/store/categories.actions';

describe('CategorySearchComponent', () => {
  let component: CategorySearchComponent;
  let fixture: ComponentFixture<CategorySearchComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySearchComponent],
      providers: [{
        provide: Store,
        useClass: MockStore,
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorySearchComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch search', () => {
    const input = fixture.debugElement.nativeElement.querySelector('input');
    input.value = 'search';
    input.dispatchEvent(new Event('input'));

    const action = SetSearchFilter({ search: input.value });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
