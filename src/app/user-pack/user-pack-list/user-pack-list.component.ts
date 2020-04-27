import { UserPackDescriptionService } from './../../shared/services/user-pack-description.service';
import { UserPackDescription } from './../../shared/userPackDescription.model';
import { UserPackService } from './../../shared/services/user-pack.service';
import { UserPackages } from './../../shared/userPacks.model';
import { ViewPopUpModelComponent } from './../view-pop-up-model/view-pop-up-model/view-pop-up-model.component';
import { Component, OnInit, HostListener } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-pack-list',
  templateUrl: './user-pack-list.component.html',
  styleUrls: ['./user-pack-list.component.scss']
})
export class UserPackListComponent implements OnInit {

  list=[1,2,3,4,5];

  constructor(private router:Router,
              private modalService: MDBModalService,
              private userPackageService:UserPackService,
              private userPackDescriptionService:UserPackDescriptionService,
              private route:ActivatedRoute) { }

  pp='';
  modalRef: MDBModalRef;
  
  size: any = "col-md-3 pb-2";

  innerWidth: any;
  x: any;

  onc = false;
  
  myPacks: UserPackages[];

  myPackDes: UserPackDescription[];

  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }


  ngOnInit(): void {

    this.myPacks = this.userPackageService.getProducts();
    this.myPackDes = this.userPackDescriptionService.getPackagesDescriptions();

    this.innerWidth =
      window.innerWidth;

    if (this.innerWidth < 575) {
      this.slides = this.chunk(this.myPacks, 1);
      this.onc = true;
    }
    if (this.innerWidth >= 575 && this.innerWidth < 768) {
      this.slides = this.chunk(this.myPacks, 2);
      this.onc = false;
    }
    if (this.innerWidth >= 768) {
      this.slides = this.chunk(this.myPacks, 4);
      this.onc = false;
    }
   
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.x = innerWidth + 200;

    if (this.innerWidth < 575) {
      this.slides = this.chunk(this.myPacks, 1);
      this.onc = true;
    }
    if (this.innerWidth >= 575 && this.innerWidth < 768) {
      this.slides = this.chunk(this.myPacks, 2);
      this.onc = false;
    }
    if (this.innerWidth >= 768) {
      this.slides = this.chunk(this.myPacks, 4);
      this.onc = false;
    }


  }

  // onItemClick(number){
  //   this.router.navigate(['userpacks',number,'viewuserpack']);
  // }

  // onEditClick(number){
  //   this.router.navigate(['userpacks',number,'editpack']);
  // }
  
  openViewPackageModal(packageID) {
    this.modalRef = this.modalService.show(ViewPopUpModelComponent, { 
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class:'modal-dialog-scrollable modal-md',
      containerClass: 'modal fade bottom',
      role:'document',
      animated: true,
      data: {
          heading: 'Add to cart Confirmation',
          content: { heading: 'Content heading', description: 'Content description', packageID:packageID}
      } });

      this.modalRef.content.action.subscribe( (result: any) => { this.pp=result; });
      
  }

  onCreatClick(){
    this.router.navigate(['userpacks','create'])
  }

}
