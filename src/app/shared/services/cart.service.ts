import { Cart } from '../cart.model';
import { Injectable,EventEmitter } from '@angular/core';
import { ProductsService } from './products.service';
import {PackagesService} from './packages.service';
import { strict } from 'assert';


@Injectable()
export class CartService{

    onAdded = new EventEmitter<number>();

    cartID:string;
    productName:string;
    imgSrc:string;

    constructor(private productService:ProductsService, private packageService:PackagesService){}

    cart:Cart[]= [];


    addItems(productID,packID,weight,totalAmountPerItem){
        this.cartID='001';
        this.productName = this.productService.getProduct(productID).productName;
        this.imgSrc = this.productService.getProduct(productID).imgSrc;
        this.cart.push(new Cart(this.cartID,productID,this.productName,this.imgSrc,packID,weight,totalAmountPerItem));
        this.onAdded.emit(this.getNumberOfElement());
    }

    addPackages(packageId,packID,weight,price){
        this.cartID = '001';
        this.productName = this.packageService.getPackage(packageId).packageDescription;
        this.imgSrc = this.packageService.getPackage(packageId).imgSrc;
        this.cart.push(new Cart(this.cartID, packageId,this.productName,this.imgSrc,packID,weight,price));
        this.onAdded.emit(this.getNumberOfElement());
    }

    getItems(){
        return this.cart.slice();
    }
    

    getNumberOfElement(){
        return this.cart.length;
    }
}