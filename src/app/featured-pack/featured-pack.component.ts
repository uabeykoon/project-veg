import { PackageDescription } from './../shared/packageDescription.models';
import { PackageDescriptionService } from './../shared/services/package-description.service';
import { Packages } from './../shared/packages.model';
import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { PackPopupModalComponent } from './pack-popup-modal/pack-popup-modal.component';
import {PackagesService} from '../shared/services/packages.service';


@Component({
  selector: 'app-featured-pack',
  templateUrl: './featured-pack.component.html',
  styleUrls: ['./featured-pack.component.scss']
})
export class FeaturedPackComponent implements OnInit {

  pp='';
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService,
              private packageService: PackagesService,
              private packageDescriptionService:PackageDescriptionService ) { }

  openPackageModal(packageID,packageName,price) {
    this.modalRef = this.modalService.show(PackPopupModalComponent, { 
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class:'modal-dialog modal-md',
      containerClass: 'modal fade bottom',
      role:'document',
      animated: true,
      data: {
          heading: 'Add to cart Confirmation',
          content: { heading: 'Content heading', description: 'Content description',packageID:packageID ,packageName:packageName,price:price}
      } });

      this.modalRef.content.action.subscribe( (result: any) => { this.pp=result; });
      
  }

  cards: Packages[];
  cardsDes: PackageDescription[];

  result:PackageDescription[];

  ngOnInit(): void {
    this.cards = this.packageService.getProducts();
    this.cardsDes = this.packageDescriptionService.getPackagesDescriptions();

    }

  
}
