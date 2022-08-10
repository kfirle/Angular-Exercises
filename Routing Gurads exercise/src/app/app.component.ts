import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proj1';
  user:string;

  constructor(private auth:AuthService, private r:Router){}

  route(ref:string){
    this.auth.referer = ref;
    this.auth.user = this.user;
    this.r.navigate([ref]);
  }
}
