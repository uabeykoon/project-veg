import { UserPackDescription } from './../userPackDescription.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPackDescriptionService {

  constructor() { }

  private userPackaDescription:UserPackDescription[] = [
    new UserPackDescription('1001','002',500),
    new UserPackDescription('1001','003',500), 
    new UserPackDescription('1001','006',250), 
    new UserPackDescription('1001','001',100), 
    new UserPackDescription('1002','003',300), 
    new UserPackDescription('1002','005',750), 
    new UserPackDescription('1002','001',900), 
    new UserPackDescription('1003','001',500), 
    new UserPackDescription('1003','003',750), 
    new UserPackDescription('1003','004',300),  
    new UserPackDescription('1003','002',400), 
    new UserPackDescription('1004','002',200), 
    new UserPackDescription('1004','003',350), 
    new UserPackDescription('1004','005',600),
    new UserPackDescription('1005','003',350), 
    new UserPackDescription('1005','005',600),
    new UserPackDescription('1005','001',150), 
    new UserPackDescription('1005','002',400) 
    
];

getPackagesDescriptions(){
  return this.userPackaDescription.slice();
}

getPackagesDescription(p:any){


  return this.userPackaDescription.filter((packageDes)=>p===packageDes.packageID);
}


}
