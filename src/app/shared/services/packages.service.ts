import { Packages } from './../packages.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor() { }

  private packages:Packages[] = [
    new Packages('101','Package 01',750,'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'), 
    new Packages('102','Package 02',1500,'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    new Packages('103','Package 03',2000,'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    new Packages('104','Package 04',2750,'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    new Packages('105','Package 05',3500,'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    new Packages('106','Package 06',5000,'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    new Packages('107','Package 07',7500,'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    new Packages('108','Package 08',12250,'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'),
    
];

getProducts(){
  return this.packages.slice();
}

getPackage(p:any){
  return this.packages.find((package1)=>p===package1.packageID);
}


}
