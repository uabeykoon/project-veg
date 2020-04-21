export class Packages{
    packageID : string;
    packageName:string;
    packageDescription:string;
    price:number;
    imgSrc:string;


    constructor(packageID:string,packageName:string,price:number,packageDescription:string,imgSrc:string){
        this.packageID=packageID;
        this.packageName=packageName;
        this.packageDescription=packageDescription;
        this.price=price;
        this.imgSrc= imgSrc;
    }
}