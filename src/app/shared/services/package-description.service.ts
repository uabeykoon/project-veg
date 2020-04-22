import { PackageDescription } from './../packageDescription.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageDescriptionService {

  constructor() { }

  private packagesDescription:PackageDescription[] = [
    new PackageDescription('101','Carrot 200g, Cabbage 750g, tomato 300g, beans 200g'),
    new PackageDescription('102','tomato 300g, beans 200g'), 
    new PackageDescription('103','Carrot 200g, Cabbage 750g, tomato 300g, beans 200g'),
    new PackageDescription('104','Carrot 200g,beans 200g'),
    new PackageDescription('105','Carrot 200g, Cabbage 750g, tomato 300g, beans 200g'),
    new PackageDescription('106','Carrot 200g'),
    new PackageDescription('107','beans 200g'),
    new PackageDescription('108','tomato 300g, beans 200g'),
];

getPackagesDescriptions(){
  return this.packagesDescription.slice();
}

getPackagesDescription(p:any){
  return this.packagesDescription.find((packageDes)=>p===packageDes.packageID);
}

}
