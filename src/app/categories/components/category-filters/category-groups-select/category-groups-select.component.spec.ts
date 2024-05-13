import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryGroupsSelectComponent } from './category-groups-select.component';
import { Store } from '@ngrx/store';
import { MockStoreGroupsSelect } from 'src/app/categories/store/store.mock';
import { of } from 'rxjs';
import { groupStub } from 'src/app/categories/stubs/group.stub';
import { SetGroupFilter } from 'src/app/categories/store/categories.actions';

describe('CategoryGroupsSelectComponent', () => {
  let component: CategoryGroupsSelectComponent;
  let fixture: ComponentFixture<CategoryGroupsSelectComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryGroupsSelectComponent],
      providers: [{
        provide: Store,
        useClass: MockStoreGroupsSelect,
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryGroupsSelectComponent);
    component = fixture.componentInstance;
    component.groups$ = of(groupStub.groups);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display right number of options', () => {
    const options = fixture.debugElement.nativeElement.querySelectorAll('option');
    expect(options.length).toEqual(groupStub.groups.length+1);
  });

  it('should dispatch select value changes', () => {
    const select = fixture.debugElement.nativeElement.querySelector('select');
    select.value = groupStub.groups[0].id;
    select.dispatchEvent(new Event('change'));

    const action = SetGroupFilter({ group: +select.value });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
