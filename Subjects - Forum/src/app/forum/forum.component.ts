import { Component, Input, OnInit } from '@angular/core';
import { ForwardingService } from '../forwarding.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  msg_list: Array<string> = [];
  @Input() id:string;
  constructor(private f:ForwardingService){
    f.getObser$().subscribe(t => this.msg_list = this.msg_list.concat(t));
   }
  sendMessage(msg:string, sender:string){
    this.f.addMsg(sender + ": " + msg);
  }

  ngOnInit(): void {
  }

}
