import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up-popup-modal',
  templateUrl: './sign-up-popup-modal.component.html',
  styleUrls: ['./sign-up-popup-modal.component.scss']
})
export class SignUpPopupModalComponent implements OnInit {

  validatingForm: FormGroup;

  constructor(public modalRef: MDBModalRef,) { }

  name:String;
  conatctnumber:number;
  address:String;
  email:string;
  password:String;
  repassword:string;

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      signupFormModalName: new FormControl('', Validators.required),
      signupFormModalContact: new FormControl('', Validators.required),
      signupFormModalAddress: new FormControl('', Validators.required),
      signupFormModalEmail: new FormControl('', Validators.email),
      signupFormModalPassword: new FormControl('', Validators.required),
      signupFormModalRePassword: new FormControl('', Validators.required),
    });
  }

  openSignIn(){
      
  }

  signUPConfirm(){
    //console.log(this.name + " "  + this.email+  " "  +this.password+  " "  +this.repassword+ " "  + this.conatctnumber+" "  +this.address)
  }

  get signupFormModalName() {
    return this.validatingForm.get('signupFormModalName');
  }

  get signupFormModalContact() {
    return this.validatingForm.get('signupFormModalContact');
  }

  get signupFormModalAddress() {
    return this.validatingForm.get('signupFormModalAddress');
  }

  get signupFormModalEmail() {
    return this.validatingForm.get('signupFormModalEmail');
  }

  get signupFormModalPassword() {
    return this.validatingForm.get('signupFormModalPassword');
  }
  get signupFormModalRePassword() {
    return this.validatingForm.get('signupFormModalRePassword');
  }

}
