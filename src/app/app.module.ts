import { BrowserModule } from '@angular/platform-browser';
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
import { CartComponent } from './cart/cart.component';
import { FloatBtnComponent } from './home/float-btn/float-btn.component';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';  
import { ProductsService } from './shared/services/products.service';
import { CartService } from './shared/services/cart.service';
import { PackagesService } from './shared/services/packages.service';
import { PackPopupModalComponent } from './featured-pack/pack-popup-modal/pack-popup-modal.component';
import { PackageDescriptionService } from './shared/services/package-description.service';
import { UserPackComponent } from './user-pack/user-pack.component';
import { UserPackListComponent } from './user-pack/user-pack-list/user-pack-list.component';
import { UserPackDetailsComponent } from './user-pack/user-pack-details/user-pack-details.component';
import { UserPackEditComponent } from './user-pack/user-pack-edit/user-pack-edit.component';
import { UserPackCreateNewComponent } from './user-pack/user-pack-create-new/user-pack-create-new.component';
import { PackageDescriptionPipePipe } from './shared/pipes/package-description-pipe.pipe';
import { PackageItemNamingPipePipe } from './shared/pipes/package-item-naming-pipe.pipe';
import { ViewPopUpModelComponent } from './user-pack/view-pop-up-model/view-pop-up-model/view-pop-up-model.component';
import { PackageItemImagePipePipe } from './shared/pipes/package-item-image-pipe.pipe';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {MMatAutocompleteModule,MatInputModule} from '@angular/material';

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
    FloatBtnComponent,
    PackPopupModalComponent,
    UserPackComponent,
    UserPackListComponent,
    UserPackDetailsComponent,
    UserPackEditComponent,
    UserPackCreateNewComponent,
    PackageDescriptionPipePipe,
    PackageItemNamingPipePipe,
    ViewPopUpModelComponent,
    PackageItemImagePipePipe,
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatBadgeModule
    
  ],
  entryComponents:[ProductPopupModalComponent],
  providers: [ProductsService,CartService,PackagesService,PackageDescriptionService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
