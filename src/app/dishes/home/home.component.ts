import { Component, OnInit } from '@angular/core';
import { Dishes } from '../dishes';
import { DishesService } from '../dishes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allDishes: Dishes[] = [];

  constructor(private dishService: DishesService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.dishService.getAll().subscribe((data: any) => {
      this.allDishes = data;
    });
  }
}
