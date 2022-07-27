import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForwardingService {
  private  s: Subject<string> = new Subject<string>();
  getObser$() {
    return this.s.asObservable();
  }
  constructor() { }
  addMsg(msg:string) {
    this.s.next(msg);
  }
}
