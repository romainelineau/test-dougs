import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCategoryBadgeComponent } from './group-category-badge.component';

describe('GroupCategoryBadgeComponent', () => {
  let component: GroupCategoryBadgeComponent;
  let fixture: ComponentFixture<GroupCategoryBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupCategoryBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupCategoryBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
