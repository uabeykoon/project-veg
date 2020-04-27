import { PackageDescription } from './../shared/packageDescription.models';
import { PackageDescriptionService } from './../shared/services/package-description.service';
import { Packages } from './../shared/packages.model';
import { Component, OnInit, HostListener } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { PackPopupModalComponent } from './pack-popup-modal/pack-popup-modal.component';
import { PackagesService } from '../shared/services/packages.service';
import { UserPackDescription } from '../shared/userPackDescription.model';


@Component({
  selector: 'app-featured-pack',
  templateUrl: './featured-pack.component.html',
  styleUrls: ['./featured-pack.component.scss']
})
export class FeaturedPackComponent implements OnInit {

  productList: UserPackDescription[];

  size: any = "col-md-3 pb-2";

  innerWidth: any;
  x: any;

  onc = false;

  pp = '';
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService,
    private packageService: PackagesService,
    private packageDescriptionService: PackageDescriptionService) { }

  openPackageModal(packageID) {
    this.modalRef = this.modalService.show(PackPopupModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: 'modal-dialog-scrollable modal-md',
      containerClass: 'modal fade bottom',
      role: 'document',
      animated: true,
      data: {
        heading: 'Add to cart Confirmation',
        content: { heading: 'Content heading', description: 'Content description', packageID: packageID }
      }
    });

    this.modalRef.content.action.subscribe((result: any) => { this.pp = result; });

  }

  cards: Packages[];
  cardsDes: PackageDescription[];

  result: PackageDescription[];


  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit(): void {
    this.cards = this.packageService.getProducts();
    this.cardsDes = this.packageDescriptionService.getPackagesDescriptions();

    this.innerWidth =
      window.innerWidth;

    if (this.innerWidth < 575) {
      this.slides = this.chunk(this.cards, 1);
      this.onc = true;
    }
    if (this.innerWidth >= 575 && this.innerWidth < 768) {
      this.slides = this.chunk(this.cards, 2);
      this.onc = false;
    }
    if (this.innerWidth >= 768) {
      this.slides = this.chunk(this.cards, 4);
      this.onc = false;
    }

  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.x = innerWidth + 200;

    if (this.innerWidth < 575) {
      this.slides = this.chunk(this.cards, 1);
      this.onc = true;
    }
    if (this.innerWidth >= 575 && this.innerWidth < 768) {
      this.slides = this.chunk(this.cards, 2);
      this.onc = false;
    }
    if (this.innerWidth >= 768) {
      this.slides = this.chunk(this.cards, 4);
      this.onc = false;
    }


  }
}
