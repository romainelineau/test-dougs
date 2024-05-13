import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryFiltersComponent } from './category-filters.component';
import { Store } from '@ngrx/store';
import { MockStore } from '../../store/store.mock';

describe('CategoryFiltersComponent', () => {
  let component: CategoryFiltersComponent;
  let fixture: ComponentFixture<CategoryFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryFiltersComponent],
      providers: [{
        provide: Store,
        useClass: MockStore,
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
