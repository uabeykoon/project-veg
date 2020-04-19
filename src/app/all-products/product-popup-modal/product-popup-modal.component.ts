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

  action = new Subject();

  constructor(public modalRef: MDBModalRef) {}

  

  onYesClick() {
      this.action.next(this.abc);
      this.modalRef.hide();
      
  }

  onNoClick() {
      this.action.next('No');
  }

  ngOnInit(){}


}
