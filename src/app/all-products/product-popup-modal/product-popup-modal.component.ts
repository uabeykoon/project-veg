import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef } from 'angular-bootstrap-md';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Products } from 'src/app/shared/products.models';

@Component({
  selector: 'app-product-popup-modal',
  templateUrl: './product-popup-modal.component.html',
  styleUrls: ['./product-popup-modal.component.scss'],
 
})
export class ProductPopupModalComponent implements OnInit {
 
  //details tht parsing from component
    heading: string;
    content: any;
    

  //fetch from services
    
  x="";
  abc='';

  weight = 200;
  unitPrice = 0;
  totalPrice = 0; 

  action = new Subject();

  constructor(public modalRef: MDBModalRef,
              ) {}

  

  onYesClick() {
      this.action.next(this.abc);
      this.modalRef.hide();
      
  }

  onNoClick() {
      this.action.next('No');
  }

  onPlusClick(){
    
    this.weight=this.weight+100;
    this.totalPrice = this.unitPrice*(this.weight/100);
    

  }

  onMinusClick(){
    if(this.weight>200){
    this.weight=this.weight-100;
    this.totalPrice = this.unitPrice*(this.weight/100);
    
    }
  }

  ngOnInit(){
    this.unitPrice=this.content.unitPrice;
    this.totalPrice=this.unitPrice*(this.weight/100);
  }


}
