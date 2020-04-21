import { Packages } from './../packages.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor() { }

  private packages:Packages[] = [
    new Packages('001','Package 01',750,'Carrot 250g, Cabbage 250g, tomato 100g','https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'), 
    new Packages('002','Package 02',1500,'Carrot 250g, Cabbage 250g, tomato 100g','https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    new Packages('003','Package 03',2000,'Carrot 250g, Cabbage 250g, tomato 100g','https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    new Packages('004','Package 04',2750,'Carrot 250g, Cabbage 250g, tomato 100g','https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    new Packages('005','Package 05',3500,'Carrot 250g, Cabbage 250g, tomato 100g','https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    new Packages('006','Package 06',5000,'Carrot 250g, Cabbage 250g, tomato 100g','https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    new Packages('007','Package 07',7500,'Carrot 250g, Cabbage 250g, tomato 100g','https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    new Packages('008','Package 08',12250,'Carrot 250g, Cabbage 250g, tomato 100g','https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    
];

getProducts(){
  return this.packages.slice();
}


}
