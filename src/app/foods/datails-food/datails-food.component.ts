import { Component, OnInit, inject } from '@angular/core';
import { Food, FoodService } from '../../shared';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-datails-food',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TitleCasePipe, CurrencyPipe, MatIcon],
  templateUrl: './datails-food.component.html',
  styleUrl: './datails-food.component.scss'
})
export class DatailsFoodComponent  implements OnInit{

  constructor(public  foodService:FoodService){

  }

  activedRoute: ActivatedRoute = inject(ActivatedRoute)
  foodId:number = -1;
  food?:Food = {
    name:'',
    description:'',
    category: '',
    image:'',
    price:0

  }

  ngOnInit(): void{
    this.foodId = Number(this.activedRoute.snapshot.params['id']);
    this.foodService.getOne(this.foodId).subscribe({
      next:(value) => (this.food = value),
      error:(e) => console.error(e),
      complete:() => console.info('complete')
    })
    console.log(this.food);
  }
}
