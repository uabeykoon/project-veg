import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elements: any = [
    {id: 1, img: 'photo' ,name: 'Carrot', quantity: '250 g', price: 'Rs.120/=', remove: 'x'},
  ];

  headElements = ['ID', 'Product View' ,'Product Name', 'Quantity', 'Price','Remove'];

}
