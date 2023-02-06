import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dishes } from '../dishes';
import { DishesService } from '../dishes.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  dishForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(0),
    color: new FormControl(''),
    date: new FormControl(''),
    start_activity: new FormControl('')
  });
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dishesService: DishesService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = String(param.get('id'));
      this.getById(id);
    });
  }

  getById(id:string) {
    this.dishesService.getById(id).subscribe((data) => {
      this.dishForm = data;
    });
  }

  update() {
    this.dishesService.update(this.dishForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/dishs/home"]);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
