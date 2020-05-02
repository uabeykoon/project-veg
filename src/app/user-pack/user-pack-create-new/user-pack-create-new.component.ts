import { ProductsService } from './../../shared/services/products.service';
import { Products } from './../../shared/products.models';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { UserPackService } from 'src/app/shared/services/user-pack.service';
import { UserPackDescriptionService } from 'src/app/shared/services/user-pack-description.service';


@Component({
  selector: 'app-user-pack-create-new',
  templateUrl: './user-pack-create-new.component.html',
  styleUrls: ['./user-pack-create-new.component.scss']
})
export class UserPackCreateNewComponent implements OnInit {


  constructor(private activatedRout:ActivatedRoute,
              private router:Router,
              private productService:ProductsService,
              private userPackageService:UserPackService,
              private userPackageDescription:UserPackDescriptionService ) { }
//define selecte item variables
  packageID:string;
  packageName:string;

  selectedItemweight = 200;
  selectedID:string;
  selectedItemName:string;
  selectedItemImg:string;
  selectedItemUnitPrice:number;
  selectedItemTotalPrice:number = 0;
  packTotalPrice=0;

  items:Products[];
  addedItems=[];
  headElements =   ['view' ,'name', 'qtn.', 'price', 'remove'];

  ngOnInit(): void {
  //get all product array from product service
    this.items = this.productService.getProducts();
    

  }
  

  selectOption(ID: string) {

  //recieve all the details related to selected item
    //console.log(ID);
    this.selectedID = ID
    this.selectedItemName = this.items.find((x)=>x.productID===ID).productName;
    this.selectedItemImg = this.items.find((x)=>x.productID===ID).imgSrc;
    this.selectedItemUnitPrice = this.items.find((x)=>x.productID===ID).unitPrice;
    this.selectedItemTotalPrice = this.selectedItemUnitPrice*(this.selectedItemweight/100);

  }


  onPlusClick(){
  //increase weight
    this.selectedItemweight=this.selectedItemweight+100;
  //update total weigt according to icrease weight
    this.selectedItemTotalPrice = this.selectedItemUnitPrice*(this.selectedItemweight/100);
  }

  onMinusClick(){
  
    if(this.selectedItemweight>200){
  //decrease weight
    this.selectedItemweight=this.selectedItemweight-100;
  //update total weigt according to icrease weight
    this.selectedItemTotalPrice = this.selectedItemUnitPrice*(this.selectedItemweight/100);
    }
  }



  addToTable(){
    if(this.getItem(this.selectedID)){
      let index = this.addedItems.indexOf(this.getItem(this.selectedID));
      this.addedItems[index].weight=this.addedItems[index].weight+this.selectedItemweight;
      this.addedItems[index].totalPricePerItem=this.addedItems[index].totalPricePerItem+this.selectedItemTotalPrice;
      console.log(index);
      this.packTotalPrice = this.calculateTotalPrice(this.addedItems);
     
    }
    else{
  //add item object to addeditems array
    this.addedItems.push({productID:this.selectedID,productName:this.selectedItemName,imgSrc:this.selectedItemImg,weight:this.selectedItemweight,totalPricePerItem:this.selectedItemTotalPrice});
  //update total price 
        this.packTotalPrice = this.calculateTotalPrice(this.addedItems);

    }



  
  }

  onRemoveClick(productID){
  //remove some ite from selected list array
    let selectedObject = this.addedItems.find((x)=>x.productID===productID);
    let index = this.addedItems.indexOf(selectedObject);
    this.addedItems.splice(index,1);
  //update total price after removing some item
    this.packTotalPrice = this.calculateTotalPrice(this.addedItems);
  }


//calculate total pack price 
  calculateTotalPrice(addedItems){
    let total=0;
    let array = addedItems;
    for(let x of array){
      total = total+x.totalPricePerItem;
    }
    return total;
  }
//search packageID existense before adding
  getItem(productID){
    return this.addedItems.find((x)=>x.productID===productID);
  }

//on confirm click
  onConfirmClick(){
//generate random id for new package
    this.packageID=uuidv4();
//update userPackageService
    this.userPackageService.addUserPackage(this.packageID,this.packageName,0);
//update userPackageDescriptionservice
    for(let x of this.addedItems){
      this.userPackageDescription.addUserPackageDescription(this.packageID,x.productID,x.weight);
    }
//navigate to userpack page
    this.router.navigate(['userpacks','userpacklist']);
    
}


  
}
