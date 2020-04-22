// import { PackageDescriptionService } from './../../shared/services/package-description.service';
import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-pack-popup-modal',
  templateUrl: './pack-popup-modal.component.html',
  styleUrls: ['./pack-popup-modal.component.scss']
})
export class PackPopupModalComponent implements OnInit {

  constructor(public modalRef: MDBModalRef, private cartService:CartService, 
    // private packageDescriptionService:PackageDescriptionService
    ) {}

    heading: string;
    content: any;
    weight = "-";

  ngOnInit(): void {
  }

  onClose(event: any) {
    console.log(event);
  }

  onClickConfirm(){
    this.cartService.addPackages(this.content.packageID,this.weight,this.content.price);
    this.modalRef.hide();
    
    
    
  }

}
