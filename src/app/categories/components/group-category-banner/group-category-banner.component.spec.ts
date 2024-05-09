import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCategoryBannerComponent } from './group-category-banner.component';

describe('GroupCategoryBannerComponent', () => {
  let component: GroupCategoryBannerComponent;
  let fixture: ComponentFixture<GroupCategoryBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupCategoryBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupCategoryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
