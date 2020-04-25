import { ProductsService } from './../../shared/services/products.service';
import { Products } from './../../shared/products.models';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-pack-create-new',
  templateUrl: './user-pack-create-new.component.html',
  styleUrls: ['./user-pack-create-new.component.scss']
})
export class UserPackCreateNewComponent implements OnInit {

  constructor(private activatedRout:ActivatedRoute,
              private productService:ProductsService ) { }
//define selecte item variables
  selectedItemweight = 200;
  selectedID:string;
  selectedItemName:string;
  selectedItemImg:string;
  selectedItemUnitPrice:number;
  selectedItemTotalPrice:number = 0;
  packTotalPrice=0;

  

  items:Products[];
  addedItems=[];
  headElements =   ['No.','Product View' ,'Product name', 'Quantity', 'Price', 'Remove'];

  ngOnInit(): void {
  //get all product array from product service
    this.items = this.productService.getProducts();
    

  }
  


  selectOption(ID: string) {

  //recieve all the details related to selected item
    console.log(ID);
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
//add item object to addeditems array
    this.addedItems.push({productID:this.selectedID,productName:this.selectedItemName,imgSrc:this.selectedItemImg,weight:this.selectedItemweight,totalPricePerItem:this.selectedItemTotalPrice});
//update total price 
    this.packTotalPrice = this.calculateTotalPrice(this.addedItems);
  
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

  
}
