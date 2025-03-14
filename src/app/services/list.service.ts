import { Car } from '../CarInterface';
import { Animal } from './../Animal';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name != a.name);
  }

  removeCar(cars: Car[], car: Car) {
    return cars.filter((a) => car.model != a.model);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }
}
