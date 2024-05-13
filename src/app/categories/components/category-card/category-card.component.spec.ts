import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryCardComponent } from './category-card.component';
import { Store } from '@ngrx/store';
import { MockStoreCategoryCard } from '../../store/store.mock';
import { of } from 'rxjs';
import { categoryStub } from '../../stubs/category.stub';
import { SetCategorySelected } from '../../store/categories.actions';
import { Category } from '../../models/category.model';

describe('CategoryCardComponent', () => {
  let component: CategoryCardComponent;
  let fixture: ComponentFixture<CategoryCardComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCardComponent],
      providers: [{
        provide: Store, 
        useClass: MockStoreCategoryCard,
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryCardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    component.category = categoryStub.category1;
    component.categoryIdSelected$ = of(1);
    fixture.detectChanges();
  });

  const prepareComponent = (category: Category) => {
    component.category = category;
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch select category action', () => {
    const card = fixture.debugElement.nativeElement.querySelector('.category-card');
    card.click();
    const action = SetCategorySelected({ categoryId: categoryStub.category1.id });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should display category title', () => {
    const title = fixture.nativeElement.querySelector('.category-card h3');
    expect(title.textContent).toContain(categoryStub.category1.wording);
  });

  it('should display category description', () => {
    const description = fixture.nativeElement.querySelector('.category-card p');
    expect(description.textContent).toContain(categoryStub.category1.description);
  });

  it('should not display category description if no description', () => {
    prepareComponent(categoryStub.category4);
    const description = fixture.nativeElement.querySelector('.category-card p');
    expect(description).toBeNull();
  });

  it('should not display badge component if displayBadge is false', () => {
    const badge = fixture.nativeElement.querySelector('app-group-category-badge');
    expect(badge).toBeNull();
  });

  it('should display badge component if displayBadge is true', () => {
    component.displayBadge = true;
    fixture.detectChanges();
    const badge = fixture.nativeElement.querySelector('app-group-category-badge');
    expect(badge).toBeTruthy();
  });

  it('should have selected class if card is selected', () => {
    const card = fixture.nativeElement.querySelector('.category-card');
    expect(card).toHaveClass('selected');
  });
});
