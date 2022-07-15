import { PeopleService } from './../../service/people.service';
import { Component, OnInit } from '@angular/core';

import { Person } from 'src/app/Person';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: Person[] = []

  peopleDetails = ''

  constructor(private peopleService: PeopleService) {
    this.getPeople()
  }

  ngOnInit(): void {
  }

  removePerson(person:Person) {
    this.people = this.peopleService.remove(this.people, person)
  }

  getPeople(): void {
    this.peopleService.getAll().subscribe((peopleResponse) => (this.people = peopleResponse))
  }

  showAge(person: Person): void {
    this.peopleDetails = `O(A) ${person.name} tem ${person.age} anos!`
  }
}
