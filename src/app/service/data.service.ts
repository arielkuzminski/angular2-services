import {LogService} from './log.service';

import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class DataService {
  pushedData = new EventEmitter<string>();
  private data: string[] = [];
  constructor(private logService: LogService) {};

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog('Saved item: ' + input);
  }

  getData() {
    return this.data;
  }

  pushDataTo(value: string) {
    this.pushedData.emit(value);
  }

}
