import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {
  big_pic_url:string="";
  is_autoplay_on:boolean=false;
  timer:any;
  @Input() url_arr:Array<string>=[];

  constructor() { }

  ngOnInit(): void {
  }

  updateBigPic(url:string){
    this.big_pic_url = url;
  }

  startAutoPlay(){
    let i=0;
    if(this.is_autoplay_on == false){
      this.timer = setInterval(()=> {
          this.big_pic_url = this.url_arr[i];
          i++;
          if(i==this.url_arr.length){
            i=0;
          }
      }, 2000);
      this.is_autoplay_on = true;
    }
  }

  stopAutoPlay(){
    if(this.is_autoplay_on == true){
      clearInterval(this.timer);
      this.is_autoplay_on = false;
    }
  }

}
