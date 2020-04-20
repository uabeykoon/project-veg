import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-float-btn',
  templateUrl: './float-btn.component.html',
  styleUrls: ['./float-btn.component.scss'],

})
export class FloatBtnComponent implements OnInit {

  notificationCount = 0;

  constructor(private router :Router,
              private cartService :CartService){
                this.cartService.onAdded.subscribe(
                (newcount:number)=>{this.notificationCount=newcount;}
                );
              }

  ngOnInit(): void {
    this.notificationCount=this.cartService.getNumberOfElement();
  }

  onbtnClicked(){
    this.router.navigate(['/cartview']);
    
  }

}
