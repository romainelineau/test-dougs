import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlphabeticalOrderListComponent } from './alphabetical-order-list.component';
import { categoryStub } from '../../stubs/category.stub';
import { Store } from '@ngrx/store';
import { MockStore } from '../../store/store.mock';

describe('AlphabeticalOrderListComponent', () => {
  let component: AlphabeticalOrderListComponent;
  let fixture: ComponentFixture<AlphabeticalOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphabeticalOrderListComponent],
      providers: [{
        provide: Store, 
        useClass: MockStore,
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlphabeticalOrderListComponent);
    component = fixture.componentInstance;
    component.categories = [categoryStub.category1, categoryStub.category2];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display right number of categories', () => {
    const categories = fixture.debugElement.nativeElement.querySelectorAll('app-category-card');
    expect(categories.length).toEqual(component.categories.length);
  });

  it('should display empty message if no categories', () => {
    component.categories = [];
    fixture.detectChanges();
    const message = fixture.debugElement.nativeElement.querySelector('.no-category-message');
    expect(message).toBeTruthy();
  });
});
