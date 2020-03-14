import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  Services = 'https://nationaldianetics.firebaseio.com/AllServices.json';
  Users = 'https://nationaldianetics.firebaseio.com/theUsers.json';

  now = moment();
  SystemDate = this.now.format('LLLL');

  constructor() { }

  getDate() {
    return this.SystemDate;
  }
}
