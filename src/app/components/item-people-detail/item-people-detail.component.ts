import { PeopleService } from './../../service/people.service';
import { Person } from './../../Person';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-people-detail',
  templateUrl: './item-people-detail.component.html',
  styleUrls: ['./item-people-detail.component.scss']
})
export class ItemPeopleDetailComponent implements OnInit {
  person?: Person

  constructor(private peopleService: PeopleService, private route: ActivatedRoute) {
    this.getPerson()
  }

  ngOnInit(): void {
  }

  getPerson() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.peopleService.getItem(id).subscribe((person) => (this.person = person))
  }

}
