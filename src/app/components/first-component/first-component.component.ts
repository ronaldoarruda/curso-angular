import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Ronaldo';
  age: number = 24;
  job = 'programador';
  hobbies = ['Correr', 'Jogar', 'Estudar']
  car = {
    name: "Polo",
    year: 2022
  };

  constructor() { }

  ngOnInit(): void {
  }

}
