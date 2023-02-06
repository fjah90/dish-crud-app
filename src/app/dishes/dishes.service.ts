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
    return this._http.get<Dishes>(`${this.apiUrl}/v1/dishes/`);

  }

  getById(id: string) {
    return this._http.get<Dishes>(`${this.apiUrl}/v1/dishes/${id}`);
  }

  create(payload: Dishes) {
    return this._http.post<Dishes>(`${this.apiUrl}/v1/dishes/`, payload);
  }

  update(payload: Dishes) {
    return this._http.put(`${this.apiUrl}/v1/dishes/${payload.id}`, payload);
  }

  deleteById(id: string) {
    return this._http.delete<Dishes>(`${this.apiUrl}/v1/dishes/${id}`);
  }
}
