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
  totalPrice = 0; 

  headElements =   ['No.','Product View' ,'Product name', 'Quantity', 'Price', 'Remove'];

  ngOnInit(): void {
    console.log(this.activatedRout.params['id']);

    this.items = this.productService.getProducts();
    

  }

  //selected: number;
  selectedid:string;
  unitdetails:any;
  unitvalues;
  unitprice;
  unitimg;
  unitid;
  unitname;

  selectOption(ID: string) {
    //console.log(ID);
    this.selectedid = ID
   // this.unitprice = this.items.find( ({ productID }) => productID === '001' );
   this.unitdetails = this.items.find(x => x.productID === ID);
   
      // for (var x in this.unitdetails){
      //   this.unitdetails.hasOwnProperty(x) && this.res.push(this.unitdetails[x])
      // }
      this.unitvalues  = Object.keys(this.unitdetails).map(it => this.unitdetails
        [it]);
        this.unitprice = this.unitvalues[2];
        this.unitimg = this.unitvalues[6];
        this.unitid = this.unitvalues[0];
        this.unitname = this.unitvalues[1];
        this.weight = 200;
        this.totalPrice = this.unitprice*2;
        return '${this.unitprice} ${this.unitimg} ${this.weight} ${this.unitid} ${this.unitname}'
        //console.log(this.unitvalues)
        //return this.unitprice = this.unitvalues[2]; 
      // return this.unitimg = this.unitvalues[3];
  }


  onPlusClick(){
    this.weight=this.weight+100;
    this.totalPrice = this.unitprice*(this.weight/100);
  }

  onMinusClick(){
    if(this.weight>200){
    this.weight=this.weight-100;
    this.totalPrice = this.unitprice*(this.weight/100);
    }
  }

  tabledata;
  res = [];

  addToTable(){
    this.tabledata = [this.unitid,this.unitimg,this.unitname, this.weight, this.unitprice];
    for (var x in this.tabledata){
        this.tabledata.hasOwnProperty(x) && this.res.push(this.tabledata[x])
      }
    console.log(this.res)
  
  }

  
}
