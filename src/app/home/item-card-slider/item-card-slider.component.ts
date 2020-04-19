import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-item-card-slider',
  templateUrl: './item-card-slider.component.html',
  styleUrls: ['./item-card-slider.component.scss']
})
export class ItemCardSliderComponent implements OnInit {

  size :any = "col-md-3 pb-2";

  innerWidth:any;
  x:any;

  onc = false;

  title = 'ggg';

  veg =[
    {name:"Carrot",details:'ggggg',src:"https://image.freepik.com/free-photo/bunch-fresh-carrots-white-background_52720-62.jpg"},
    {name:"Beet",details:'ggggg',src:"https://images.assetsdelivery.com/compings_v2/buriy/buriy1408/buriy140800037.jpg"},
    {name:"Onion",details:'ggggg',src:"https://lh3.googleusercontent.com/proxy/O09_u3oUC3u2l3lx_7I_HfvHPjQ1RfnW2TCXjQbGB8A76Tvh9q8KPByrNhjqCbLHverUhDUQw6uG-9AAPLN1Ju36ZWmR6FFzRO-fJ9FgPgWYexShlGHruY2NCIlu"},
    {name:"Garlick",details:'ggggg', src:"https://media.istockphoto.com/photos/potatoes-isolated-on-white-background-picture-id952980244?k=6&m=952980244&s=170667a&w=0&h=bLd5BHFNRW7_A1zvU_VtXs3xjEyxC4MpWXOKwDVtTsQ="},
    {name:"Carrot",details:'ggggg',src:"https://image.freepik.com/free-photo/snake-gourd-white-background_62856-2496.jpg"},
    {name:"Carrot",details:'ggggg',src:"https://image.freepik.com/free-photo/bitter-melon-bitter-gourd-white-background_35378-1252.jpg"},
  ];


  cards = [
    {
      package: 'Carrot',
      price: 'Rs.150',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://image.freepik.com/free-photo/bunch-fresh-carrots-white-background_52720-62.jpg'
    },
    {
      package: 'Carrot',
      price: 'Rs.150',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://images.assetsdelivery.com/compings_v2/buriy/buriy1408/buriy140800037.jpg'
    },
    {
      package: 'Carrot',
      price: 'Rs.150',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://www.onlyfoods.net/wp-content/uploads/2017/03/Snake-Gourd.jpg'
    },
    {
      package: 'Carrot',
      price: 'Rs.150',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://media.istockphoto.com/photos/potatoes-isolated-on-white-background-picture-id952980244?k=6&m=952980244&s=170667a&w=0&h=bLd5BHFNRW7_A1zvU_VtXs3xjEyxC4MpWXOKwDVtTsQ='
    },
    {
      package: 'Carrot',
      price: 'Rs.150',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://www.onlyfoods.net/wp-content/uploads/2017/03/Snake-Gourd.jpg'
    },
    {
      package: 'Carrot',
      price: 'Rs.150',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://image.freepik.com/free-photo/bitter-melon-bitter-gourd-white-background_35378-1252.jpg'
    },
    {
      package: 'Carrot',
      price: 'Rs.150',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      package: 'Carrot',
      price: 'Rs.150',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth<500){
      this.slides = this.chunk(this.cards, 1);
      this.onc=true;
    }
    if(this.innerWidth>=500){
      this.slides = this.chunk(this.cards, 4);
      this.onc=false;
    }

    
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
  this.innerWidth = window.innerWidth;
  this.x = innerWidth+200;

    if(this.innerWidth<500){
      this.slides = this.chunk(this.cards, 1);
      this.onc=true;
    }
    if (this.innerWidth>=500) {
      this.slides = this.chunk(this.cards, 4);
      this.onc=false;
    } 

}

}
