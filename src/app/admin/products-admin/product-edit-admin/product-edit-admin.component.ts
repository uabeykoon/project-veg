import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-edit-admin',
  templateUrl: './product-edit-admin.component.html',
  styleUrls: ['./product-edit-admin.component.scss']
})
export class ProductEditAdminComponent implements OnInit {
  productID:string;
  productName :string;
  unitPrice:number;
  minimumOrder:number;
  Availability:boolean;
  imgSrc:string;
  imagepreview:string;

  editingDisableStatus=true;

  constructor(private router:Router,
              private route:ActivatedRoute,
              private productService:ProductsService) { }

  ngOnInit(): void {
    this.productID=this.route.snapshot.params['id'];
    let product = this.productService.getProduct(this.productID);
    this.productName=product.productName;
    this.unitPrice=product.unitPrice;
    this.minimumOrder=product.minimumOrder;
    this.Availability=product.availability;
    this.imgSrc=product.imgSrc;
    this.imagepreview = product.imgSrc;
  }


  onChangeAvailability(){
    this.Availability=!this.Availability;
  
  }
  // onChangeImg(){
  //   this.imagepreview=this.imgSrc;
  // }


  onUpdateClick(){
    this.productService.updateProduct(this.productID,{
      productName:this.productName,
      unitPrice:this.unitPrice,
      minimumOrder:this.minimumOrder,
      availability:this.Availability,
      imgSrc :this.imgSrc
    });
    this.router.navigate(['admin','productsadmin']);

  }
  onCancelClick(){
    this.router.navigate(['admin','productsadmin']);
  }

  onClickEnableEditing(){
    this.editingDisableStatus=false;
  }

}
