import { PackageDescription } from './../packageDescription.models';
import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class PackageDescriptionService {

  constructor(private productService:ProductsService) { }

  private packagesDescription:PackageDescription[] = [
    new PackageDescription('101','002',500),
    new PackageDescription('101','003',600), 
    new PackageDescription('101','005',600), 
    new PackageDescription('101','001',900), 
    new PackageDescription('102','002',300), 
    new PackageDescription('102','006',800), 
    new PackageDescription('102','001',1000), 
    new PackageDescription('103','001',600), 
    new PackageDescription('103','003',750), 
    new PackageDescription('103','004',600),  
    new PackageDescription('103','002',600), 
    new PackageDescription('104','002',300), 
    new PackageDescription('104','003',450), 
    new PackageDescription('104','005',600), 
    
];


getPackagesDescriptions(){
  return this.packagesDescription.slice();
}

getPackagesDescription(p:any){
  return this.packagesDescription.filter((packageDes)=>p===packageDes.packageID);
}

}
