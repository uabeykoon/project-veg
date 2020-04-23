import { PackageDescriptionService } from './package-description.service';
import { Cart } from '../cart.model';
import { Injectable,EventEmitter } from '@angular/core';
import { ProductsService } from './products.service';
import {PackagesService} from './packages.service';
import { strict } from 'assert';
import { UserPackService } from './user-pack.service';
import { UserPackDescriptionService } from './user-pack-description.service';


@Injectable()
export class CartService{

    onAdded = new EventEmitter<number>();

    cartID:string;
    productName:string;
    packageName:string;
    imgSrc:string;
    isPack:string;

    constructor(private productService:ProductsService,
                private packageService:PackagesService, 
                private packageDescriptionService:PackageDescriptionService,
                private userPackageService:UserPackService,
                private userPackageDescriptionService:UserPackDescriptionService){}

    cart:Cart[]= [];


    addItems(productID,weight,totalAmountPerItem){
        this.cartID='001';
        this.isPack='v';
        this.productName = this.productService.getProduct(productID).productName;
        this.imgSrc = this.productService.getProduct(productID).imgSrc;
        this.cart.push(new Cart(this.cartID,productID,this.productName,this.imgSrc,weight,totalAmountPerItem,this.isPack));
        this.onAdded.emit(this.getNumberOfElement());
    }

    addPackages(packageID,weight,price){
        this.cartID = '001';
        this.isPack='p';
        this.packageName =this.packageService.getPackage(packageID).packageName
        this.imgSrc=this.packageService.getPackage(packageID).imgSrc;
        this.cart.push(new Cart(this.cartID,packageID,this.packageName,this.imgSrc,weight,price,this.isPack));
        this.onAdded.emit(this.getNumberOfElement());
       
    }


    addUserPackages(packageID,weight,price){
        this.cartID='001';
        this.isPack='u'
        this.packageName = this.userPackageService.getPackage(packageID).packageName;
        this.imgSrc='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg';
        this.cart.push(new Cart(this.cartID,packageID,this.packageName,this.imgSrc,weight,price,this.isPack));
        this.onAdded.emit(this.getNumberOfElement());
    }

    getItems(){
        return this.cart.slice();
    }
    

    getNumberOfElement(){
        return this.cart.length;
    }
}