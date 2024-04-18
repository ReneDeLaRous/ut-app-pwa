import {Route} from '@angular/router';
import {FoodListComponent} from './food-list/food-list.component';
import { FoodFoodComponent } from './food-food/food-food.component';
import { DatailsFoodComponent } from './datails-food/datails-food.component';

export default [
  {
    path: "food-list",
    component: FoodListComponent,
    title: "Lista de comida",
  },
  {
    path: "form",
    component: FoodFoodComponent,
    title:"Crear comida"
  },
  {
    path: 'form/:id',
    component:FoodFoodComponent,
    title: 'Actualizar comida'
  },
  {
    path: 'details-food/:id',
    component: DatailsFoodComponent,
    title: 'Ver detalles'
  }
] satisfies Route[];