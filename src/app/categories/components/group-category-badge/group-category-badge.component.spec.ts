import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupCategoryBadgeComponent } from './group-category-badge.component';
import { groupStub } from '../../stubs/group.stub';
import { Group } from '../../models/group.model';

describe('GroupCategoryBadgeComponent', () => {
  let component: GroupCategoryBadgeComponent;
  let fixture: ComponentFixture<GroupCategoryBadgeComponent>;
  const group1 = groupStub.group1;
  const group2 = groupStub.group2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupCategoryBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupCategoryBadgeComponent);
    component = fixture.componentInstance;
    component.group = group1;
    fixture.detectChanges();
  });

  const prepareComponent = (group: Group) => {
    component.group = group;
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have group color class when group color is not default', () => {
    const label = fixture.nativeElement.querySelector('div.group-badge');
    expect(label).toHaveClass(group1.color!);
  });

  it('should have default color class when group color is default', () => {
    prepareComponent(group2);
    const label = fixture.nativeElement.querySelector('div.group-badge');
    expect(label).toHaveClass("m-default");
  });

  it('should display group name', () => {
    const label = fixture.nativeElement.querySelector('div.group-badge p');
    expect(label.textContent).toContain(group1.name);
  });
});
