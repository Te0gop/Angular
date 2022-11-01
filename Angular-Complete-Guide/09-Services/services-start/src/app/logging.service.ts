import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logsStatusChanged(accountStatus: string) {
    console.log('A server status changed, new status: ' + accountStatus);
  }

  constructor() { }
}
