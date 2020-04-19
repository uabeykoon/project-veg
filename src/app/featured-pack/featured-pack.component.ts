import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-pack',
  templateUrl: './featured-pack.component.html',
  styleUrls: ['./featured-pack.component.scss']
})
export class FeaturedPackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    {
      title: 'Package 1',
      price:'Rs.2500/=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Add to Cart',
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
    },
    {
      title: 'Package 2',
      price:'Rs.2500/=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Add to Cart',
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
    },
    {
      title: 'Package 3',
      price:'Rs.2500/=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Add to Cart',
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
    },
    {
      title: 'Product 4',
      price:'Rs.5000/=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Add to Cart',
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
    },
    {
      title: 'Product 5',
      price:'Rs.5000/=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Add to Cart',
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
    },
    {
      title: 'Product 6',
      price:'Rs.5000/=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Add to Cart',
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
    },
    {
      title: 'Product 7',
      price:'Rs.5000/=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Add to Cart',
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
    },
    {
      title: 'Product 8',
      price:'Rs.5000/=',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Add to Cart',
      img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg'
    },
  ]

}
