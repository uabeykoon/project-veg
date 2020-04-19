import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  constructor() { }

  size :any = "col-md-3 pb-2";

  innerWidth:any;
  x:any;

  onc = false;

  ngOnInit() {
    // this.innerWidth = window.innerWidth;
    // if(this.innerWidth<500){
    //   this.slides = this.chunk(this.cards, 1);
    //   this.onc=true;
    // }
    // if(this.innerWidth>=500){
    //   this.slides = this.chunk(this.cards, 4);
    //   this.onc=false;
    // }
  }

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
    },]

  


}




