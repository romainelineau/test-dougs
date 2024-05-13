import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupCategoryListComponent } from './group-category-list.component';
import { groupedCategoryStub } from '../../stubs/grouped-category.stub';
import { Store } from '@ngrx/store';
import { MockStore } from '../../store/store.mock';

describe('GroupCategoryListComponent', () => {
  let component: GroupCategoryListComponent;
  let fixture: ComponentFixture<GroupCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupCategoryListComponent],
      providers: [{
        provide: Store, 
        useClass: MockStore,
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupCategoryListComponent);
    component = fixture.componentInstance;
    component.groupedCategories = [
      groupedCategoryStub.groupedCategory1, 
      groupedCategoryStub.groupedCategory2
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display right number of category groups', () => {
    const groups = fixture.debugElement.nativeElement.querySelectorAll('.category-list');
    expect(groups.length).toEqual(component.groupedCategories.length);
  });

  it('should display right number of categories', () => {
    const categoriesNb = component.groupedCategories.reduce((total, group) => total + group.categories.length, 0);
    const categories = fixture.debugElement.nativeElement.querySelectorAll('app-category-card');
    expect(categories.length).toEqual(categoriesNb);
  });

  it('should display empty message if no categories', () => {
    component.groupedCategories = [];
    fixture.detectChanges();
    const message = fixture.debugElement.nativeElement.querySelector('.no-category-message');
    expect(message).toBeTruthy();
  });
});
