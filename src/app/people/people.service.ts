import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class PeopleService {

  constructor() {}

  getPeople() {
    // Observable.
    return of([
      {
        id: 1,
        name: 'Maixim',
        surname: 'Neshaluev',
        twitter: '@hck890d9'
      }
    ]);
  }
}
