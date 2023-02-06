import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dishes } from './dishes';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  public apiUrl: String;
  
  constructor(private _http: HttpClient) {
    this.apiUrl = 'https://localhost:3000';
  }

  getAll() {
    return this._http.get<Dishes>(this.apiUrl + "/v1/dishes");

  }
}
