import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/Car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  cars:Car[] = []

  carsDetails = ''
  constructor(private carService: CarService) {
    this.getCars()
  }

  ngOnInit(): void {
  }

  getCars(): void {
    this.carService.getAll().subscribe((carResponse) => (this.cars = carResponse))
  }

  showAge(car:Car): void {
    this.carsDetails = `O(A) ${car.name} tem ${car.age} anos!`
  }

  removeCar(car:Car) {
    this.cars = this.carService.remove(this.cars, car)
  }

}
