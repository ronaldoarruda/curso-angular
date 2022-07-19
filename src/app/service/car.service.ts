import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Car } from '../Car';

@Injectable({
  providedIn:'root'
})

export class CarService {
  private apiUrl = 'http://localhost:3000/cars'

  constructor(private http:HttpClient) { }

  remove (cars: Car[], car:Car) {
    return cars.filter((a)=> car.name!== a.name)
  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}`)
  }

  getItem(id:number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`)
  }
}
