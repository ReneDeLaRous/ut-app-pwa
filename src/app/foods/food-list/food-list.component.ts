import { Component } from '@angular/core';
import { Food } from '../../shared/food.model';
import { FoodService } from '../../shared/food.service';
import { FoodComponent } from '../food/food.component';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent {
  data: Food[] = [];

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.foodService.getAll().subscribe({
      next:(value) => (this.data = value),
      error:(e) => console.error(e),
      complete:() => console.info('complete')
    })
  }
}
