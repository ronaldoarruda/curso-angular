import { CarService } from 'src/app/service/car.service';
import { Car } from 'src/app/Car';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item-cars-detail',
  templateUrl: './item-cars-detail.component.html',
  styleUrls: ['./item-cars-detail.component.scss']
})
export class ItemCarsDetailComponent implements OnInit {
  car?:Car

  constructor(private carService: CarService, private route: ActivatedRoute) {
    this.getCar()
   }

  ngOnInit(): void {
  }
  getCar() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.carService.getItem(id).subscribe((car) => (this.car = car))
  }
}
