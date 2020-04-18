import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mobile :boolean;
  innerWidth:number;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    //mobile responsive
    if(this.innerWidth<991){
      this.mobile=false;
    }
    else{
      this.mobile=true;
    }
  }

  //control size of navigation according to wondow size

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerWidth = window.innerWidth;
  
  if(this.innerWidth>=991){
    this.mobile=true;
  }

  if(this.innerWidth<991){
    this.mobile=false;
  }
  
}

}
