import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { ProductPopupModalComponent } from './product-popup-modal/product-popup-modal.component';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  pp='';
  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  size :any = "col-md-3 pb-2";

  innerWidth:any;
  x:any;

  onc = false;

  

  


  cards = [
    {
      title: 'Product 1',
      quantity:'100g',
      price:'Rs.1000/=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Add to Cart',
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
    },
    {
      title: 'Product 2',
      quantity:'100g',
      price:'Rs.2500/=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Add to Cart',
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
    },
    {
      title: 'Product 3',
      quantity:'100g',
      price:'Rs.4000/=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Add to Cart',
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
    },
    {
      title: 'Product 4',
      quantity:'100g',
      price:'Rs.5000/=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Add to Cart',
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
    },];






    openModal() {
      this.modalRef = this.modalService.show(ProductPopupModalComponent, { 
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class:'modal-dialog modal-sm',
        containerClass: 'modal fade bottom',
        role:'document',
        animated: true,
        data: {
            heading: 'Add to cart Confirmation',
            content: { heading: 'Content heading', description: 'Content description'}
        } });
  
        this.modalRef.content.action.subscribe( (result: any) => { this.pp=result; });
  
  
        
    }
  
    ngOnInit() {
      this.modalService.open.subscribe(() => console.log('open'));
      this.modalService.opened.subscribe(() => console.log('opened'));
      this.modalService.close.subscribe(() => console.log('close'));
      this.modalService.closed.subscribe(() => console.log('closed'));
    }

  


}




