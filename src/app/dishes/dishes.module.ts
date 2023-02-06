import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DishesRoutingModule
  ]
})
export class DishesModule { }
