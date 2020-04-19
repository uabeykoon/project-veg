import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ContantUsComponent } from './contant-us/contant-us.component';
import { FeaturedPackComponent } from './featured-pack/featured-pack.component';
import { BannerSliderComponent } from './home/banner-slider/banner-slider.component';
import { ItemCardSliderComponent } from './home/item-card-slider/item-card-slider.component';
import { FeaturedPackCardSliderComponent } from './home/featured-pack-card-slider/featured-pack-card-slider.component';
import { ProductPopupModalComponent } from './all-products/product-popup-modal/product-popup-modal.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { FloatBtnComponent } from './home/float-btn/float-btn.component';
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AllProductsComponent,
    ContantUsComponent,
    FeaturedPackComponent,
    BannerSliderComponent,
    ItemCardSliderComponent,
    FeaturedPackCardSliderComponent,
    ProductPopupModalComponent,
    CartComponent,
    FloatBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule
    
  ],
  entryComponents:[ProductPopupModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
