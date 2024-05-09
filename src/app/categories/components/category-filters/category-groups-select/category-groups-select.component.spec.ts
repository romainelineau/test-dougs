import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryGroupsSelectComponent } from './category-groups-select.component';

describe('CategoryGroupsSelectComponent', () => {
  let component: CategoryGroupsSelectComponent;
  let fixture: ComponentFixture<CategoryGroupsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryGroupsSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryGroupsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
