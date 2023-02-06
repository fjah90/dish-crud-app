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
  deleteModal: any;
  idTodelete: string = "";

  constructor(private dishService: DishesService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.dishService.getAll().subscribe((data: any) => {
      this.allDishes = data;
    });
  }

  openDeleteModal(id: string) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.dishService.deleteById(this.idTodelete).subscribe({
      next: (data) => {
        this.allDishes = this.allDishes.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}
