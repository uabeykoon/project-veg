import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { FeaturedPackComponent } from './featured-pack/featured-pack.component';
import { ContantUsComponent } from './contant-us/contant-us.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'allproducts',component:AllProductsComponent},
  {path:'featuredpack',component:FeaturedPackComponent},
  {path:'contactus',component:ContantUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }