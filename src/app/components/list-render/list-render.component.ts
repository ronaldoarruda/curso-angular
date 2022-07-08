import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: 'Turca', type:'Dog', age: 4},
    {name:'Tom', type:'Cat', age:5},
    {name: 'Bob', type:'Dog', age:6},
    {name:'Frida', type:'Horse', age:10},
  ]

  animalDetails = ''

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }
}
