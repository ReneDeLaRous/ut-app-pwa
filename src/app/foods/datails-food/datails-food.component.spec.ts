import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailsFoodComponent } from './datails-food.component';

describe('DatailsFoodComponent', () => {
  let component: DatailsFoodComponent;
  let fixture: ComponentFixture<DatailsFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatailsFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatailsFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
