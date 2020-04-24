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

  items:Products[];

  elements: any = [
    {id: 1,imgview: 'photo',name: 'Carrot', quantity: '100g', price: 'Rs.120/='},
    {id: 2,imgview: 'photo' ,name: 'Cabbage', quantity: '300g', price: 'Rs.150/='},
  ];

  weight = 200;
  unitPrice = 0;
  totalPrice = 0; 

  headElements =   ['No.','Product View' ,'Product name', 'Quantity', 'Price', 'Remove'];

  ngOnInit(): void {
    console.log(this.activatedRout.params['id']);

    this.items = this.productService.getProducts();
    
    
  }

  
  onPlusClick(){
    this.weight=this.weight+100;
    this.totalPrice = this.unitPrice*(this.weight/100);
  }

  onMinusClick(){
    if(this.weight>200){
    this.weight=this.weight-100;
    this.totalPrice = this.unitPrice*(this.weight/100);
    }
  }

  
}
