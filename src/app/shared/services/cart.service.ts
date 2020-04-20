import { Cart } from '../cart.model';
import { Injectable,EventEmitter } from '@angular/core';
import { ProductsService } from './products.service';
import { strict } from 'assert';


@Injectable()
export class CartService{

    onAdded = new EventEmitter<number>();

    cartID:string;
    productName:string;
    imgSrc:string;

    constructor(private productService:ProductsService){}

    cart:Cart[]= [];


    addItems(productID,packID,weight,totalAmountPerItem){
        this.cartID='001'
        this.productName = this.productService.getProduct(productID).productName;
        this.imgSrc = this.productService.getProduct(productID).imgSrc;
        this.cart.push(new Cart(this.cartID,productID,this.productName,this.imgSrc,packID,weight,totalAmountPerItem));
        this.onAdded.emit(this.getNumberOfElement());
    }

    getItems(){
        return this.cart.slice();
    }

    getNumberOfElement(){
        return this.cart.length;
    }
}