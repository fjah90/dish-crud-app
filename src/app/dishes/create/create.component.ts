import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dishes } from '../dishes';
import { DishesService } from '../dishes.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {
  dishForm: Dishes = {
    id: '',
    name: '',
    price: 0,
    color: '',
    date: '',
    start_activity: ''
  };

  constructor(private dishesService: DishesService,
    private router: Router) { }

  ngOnInit(): void { }

  create() {
    this.dishesService.create(this.dishForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/dishs/home"])
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
