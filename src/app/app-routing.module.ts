import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { FeaturedPackComponent } from './featured-pack/featured-pack.component';
import { ContantUsComponent } from './contant-us/contant-us.component';
import { UserPackComponent } from './user-pack/user-pack.component';
import { UserPackListComponent } from './user-pack/user-pack-list/user-pack-list.component';
import { UserPackDetailsComponent } from './user-pack/user-pack-details/user-pack-details.component';
import { UserPackEditComponent } from './user-pack/user-pack-edit/user-pack-edit.component';
import { UserPackCreateNewComponent } from './user-pack/user-pack-create-new/user-pack-create-new.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'allproducts',component:AllProductsComponent},
  {path:'featuredpacks',component:FeaturedPackComponent},
  {path:'contactus',component:ContantUsComponent},
  {path:'cartview',component:CartComponent},
  {path: 'userpacks',component:UserPackComponent ,children:[
    {path:'userpacklist',component:UserPackListComponent},
    {path:':id/viewuserpack',component:UserPackDetailsComponent},
    {path:':id/editpack',component:UserPackEditComponent},
    {path:'create',component:UserPackCreateNewComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
