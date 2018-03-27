import { Injectable } from "@angular/core";

import * as moment from 'moment';

@Injectable()
export class TimerService {
    constructor() {}

    getTime(): string {
        return moment().format('hh:mm');
    }

    compareTime(): any {
        //console.log(this.getTime());
        //const timeNow = moment();
        //return moment().isBefore((this.getTime().toString() +10))
    }
}
