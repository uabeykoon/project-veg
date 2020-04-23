import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { UserPackDescription } from 'src/app/shared/userPackDescription.model';
import { UserPackDescriptionService } from 'src/app/shared/services/user-pack-description.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UserPackService } from 'src/app/shared/services/user-pack.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-view-pop-up-model',
  templateUrl: './view-pop-up-model.component.html',
  styleUrls: ['./view-pop-up-model.component.scss']
})
export class ViewPopUpModelComponent implements OnInit {

  constructor(public modalRef:MDBModalRef,
              private userPackService:UserPackService,
              private userPackDesService:UserPackDescriptionService,
              private productService:ProductsService,
              private cartService:CartService) { }
  
//get contents those are passing with modal
  content:any;


  productList:UserPackDescription[];
  totalAmount:number;

  ngOnInit(): void {
  // get all product description list from the service
    this.productList=this.userPackDesService.getPackagesDescriptions();

  //filter related package description list
    const specificProductList = this.productList.filter((x)=>{
      return x.packageID===this.content.packageID;
    })

  //calculate total amount of pack
    let x = 0;
    for(const i of specificProductList){
      let unitPrice=this.productService.getProduct(i.productID).unitPrice;
      let quantity=i.quantity;
      x=x+unitPrice*(quantity/100);
    }
    this.totalAmount=x;
}

  onClose(event: any) {
    console.log(event);
  }

  onClickEdit(){

  }

  onAddToCartClick(){
    this.cartService.addUserPackages(this.content.packageID,0,this.totalAmount);
    this.modalRef.hide();
  }



}