import { ListService } from './../../service/list.service';
import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = []

  animalDetails = ''

  constructor(private listService:ListService) {
    this.getAnimals()
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal:Animal) {
    console.log("Removendo animal...");
   this.animals = this.listService.remove(this.animals, animal)
  }
  getAnimals(): void {
    this.listService.getAll().subscribe((animalsResponse) => (this.animals = animalsResponse));
  }




}
