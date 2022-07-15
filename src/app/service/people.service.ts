import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Person } from "../Person";

@Injectable({
  providedIn:'root'
})

export class PeopleService {
  private apiUrl = 'http://localhost:3000/people'

  constructor (private http: HttpClient) { }

  remove(people:Person[], person: Person) {
    return people.filter((a) =>person.name !== a.name)
  }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl)
  }
}

