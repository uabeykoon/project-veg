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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AllProductsComponent,
    ContantUsComponent,
    FeaturedPackComponent,
    BannerSliderComponent,
    ItemCardSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
