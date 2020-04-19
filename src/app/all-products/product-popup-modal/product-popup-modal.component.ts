import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-product-popup-modal',
  templateUrl: './product-popup-modal.component.html',
  styleUrls: ['./product-popup-modal.component.scss']
})
export class ProductPopupModalComponent implements OnInit {

  heading: string;
  content: any;
  abc='';

  weight = 200;
  unitPrice = 60;

  totalPrice = this.unitPrice*(this.weight/100);

  action = new Subject();

  constructor(public modalRef: MDBModalRef) {}

  

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
    this.weight=this.weight-100;
    this.totalPrice = this.unitPrice*(this.weight/100);
  }

  ngOnInit(){}


}
