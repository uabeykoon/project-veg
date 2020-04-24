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

  constructor(private cartService : CartService) { 

//getting new array after removing some element from cart
    this.cartService.onRemoved.subscribe((arr:Cart[])=>{
        this.cartItems=arr;
//calculating new total after removing items
    this.totalAmount=0;
    for(var x=0; x<this.cartItems.length; x++){
      this.totalAmount=this.totalAmount+this.cartItems[x].totalAmountPerItem;
    }

        
    });
  }

  ngOnInit(){
    this.cartItems = this.cartService.getItems();

    for(var x=0; x<this.cartItems.length; x++){
      this.totalAmount=this.totalAmount+this.cartItems[x].totalAmountPerItem;
    }
  
  }

  headElements = ['ID', 'Product View' ,'Product Name', 'Quantity', 'Price','Remove'];

  onClickRemove(productID){
    this.cartService.removeItem(productID);
  }

}
