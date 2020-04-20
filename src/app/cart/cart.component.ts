import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Cart } from '../shared/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  
})
export class CartComponent implements OnInit {

  cartItems:Cart[]=[];
  totalAmount:number=0;

  constructor(private cartService : CartService) { }

  ngOnInit(){
    this.cartItems = this.cartService.getItems();

    for(var x=0; x<this.cartItems.length; x++){
      this.totalAmount=this.totalAmount+this.cartItems[x].totalAmountPerItem;
    }
  
  }

  headElements = ['ID', 'Product View' ,'Product Name', 'Quantity', 'Price','Remove'];

}
