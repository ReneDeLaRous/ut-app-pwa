import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFoodComponent } from './food-food.component';

describe('FoodFoodComponent', () => {
  let component: FoodFoodComponent;
  let fixture: ComponentFixture<FoodFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
