import { Component, Input, OnInit } from '@angular/core';
import { ReportingService } from '../reporting.service';
import { Report } from './Report';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorComponent implements OnInit {
 @Input() name:string;

  constructor(private r:ReportingService) { }

  ngOnInit(): void {
  }

  createReport(vehicle_num:number,address:string,date:string){
    console.log(date);
    let d1 = new Date(date);
    console.log(d1);
    let r1 = new Report(vehicle_num, address, d1 ,this.name);
    this.r.sendReport(r1);
  }
}
