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
              private packageService: PackagesService) { }

  openPackageModal(packageID,packageName,price,packageDescription) {
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
          content: { heading: 'Content heading', description: 'Content description',packageID:packageID ,packageName:packageName,price:price,packageDescription:packageDescription}
      } });

      this.modalRef.content.action.subscribe( (result: any) => { this.pp=result; });
      
  }

  cards: Packages[];

  ngOnInit(): void {
    this.cards = this.packageService.getProducts();

  
  }

  // cards = [
  //   {
  //     title: 'Package 1',
  //     price:'Rs.2500/=',
  //     description: 'Some quick example text to build on the card title and make up the bulk of the card content',
  //     buttonText: 'Add to Cart',
  //     img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
  //   },
  //   {
  //     title: 'Package 2',
  //     price:'Rs.2500/=',
  //     description: 'Some quick example text to build on the card title and make up the bulk of the card content',
  //     buttonText: 'Add to Cart',
  //     img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
  //   },
  //   {
  //     title: 'Package 3',
  //     price:'Rs.2500/=',
  //     description: 'Some quick example text to build on the card title and make up the bulk of the card content',
  //     buttonText: 'Add to Cart',
  //     img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
  //   },
  //   {
  //     title: 'Product 4',
  //     price:'Rs.5000/=',
  //     description: 'Some quick example text to build on the card title and make up the bulk of the card content',
  //     buttonText: 'Add to Cart',
  //     img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
  //   },
  //   {
  //     title: 'Product 5',
  //     price:'Rs.5000/=',
  //     description: 'Some quick example text to build on the card title and make up the bulk of the card content',
  //     buttonText: 'Add to Cart',
  //     img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
  //   },
  //   {
  //     title: 'Product 6',
  //     price:'Rs.5000/=',
  //     description: 'Some quick example text to build on the card title and make up the bulk of the card content',
  //     buttonText: 'Add to Cart',
  //     img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
  //   },
  //   {
  //     title: 'Product 7',
  //     price:'Rs.5000/=',
  //     description: 'Some quick example text to build on the card title and make up the bulk of the card content',
  //     buttonText: 'Add to Cart',
  //     img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
  //   },
  //   {
  //     title: 'Product 8',
  //     price:'Rs.5000/=',
  //     description: 'Some quick example text to build on the card title and make up the bulk of the card content',
  //     buttonText: 'Add to Cart',
  //     img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
  //   },
  // ]

}
