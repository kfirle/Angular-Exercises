import { Component, OnInit } from '@angular/core';
import { Report } from '../inspector/Report';
import { ReportingService } from '../reporting.service';

@Component({
  selector: 'app-muni',
  templateUrl: './muni.component.html',
  styleUrls: ['./muni.component.css']
})
export class MuniComponent implements OnInit {
  reports:Array<Report> = [];

  constructor(private r:ReportingService) { }

  ngOnInit(): void {
    this.r.report_sub$.subscribe(report => {
      this.reports.push(report);
      console.log(report);
    });
  }
}
