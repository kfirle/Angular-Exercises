import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Report } from './inspector/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  private report_sub = new Subject<Report>();

  constructor() { }

  get report_sub$(){
    return this.report_sub.asObservable();
  }

  sendReport(report:Report){
    this.report_sub.next(report);
  }
}
