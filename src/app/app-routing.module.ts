import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { FeaturedPackComponent } from './featured-pack/featured-pack.component';
import { ContantUsComponent } from './contant-us/contant-us.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'allproducts',component:AllProductsComponent},
  {path:'featuredpacks',component:FeaturedPackComponent},
  {path:'contactus',component:ContantUsComponent},
  {path:'cartview',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
