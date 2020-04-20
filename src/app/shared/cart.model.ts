export class Cart{
    cartID:string;
    productID:string;
    productName:string;
    imgSrc:string;
    packID:string;
    weight:number;
    totalAmountPerItem:number;

    constructor(cartID:string,productID:string,productName:string,imgSrc:string,packID:string,weight:number,totalAmountPerItem:number){
        this.cartID=cartID;
        this.productID= productID;
        this.productName=productName;
        this.imgSrc=imgSrc;
        this.packID = packID;
        this.weight = weight;
        this.totalAmountPerItem = totalAmountPerItem;
    }
}
