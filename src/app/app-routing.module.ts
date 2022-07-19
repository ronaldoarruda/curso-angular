import { ItemPeopleDetailComponent } from './components/item-people-detail/item-people-detail.component';
import { ItemCarsDetailComponent } from './components/item-cars-detail/item-cars-detail.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CarComponent } from './components/car/car.component';
import { PeopleComponent } from './components/people/people.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component:ItemDetailComponent},
  {path: 'event', component: EventosComponent },
  {path: 'people', component: PeopleComponent},
  {path: 'people/:id', component:ItemPeopleDetailComponent},
  {path: 'cars', component: CarComponent},
  {path: 'cars/:id', component: ItemCarsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
