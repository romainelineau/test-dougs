import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticalOrderListComponent } from './alphabetical-order-list.component';

describe('AlphabeticalOrderListComponent', () => {
  let component: AlphabeticalOrderListComponent;
  let fixture: ComponentFixture<AlphabeticalOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphabeticalOrderListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlphabeticalOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
