import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-pack-popup-modal',
  templateUrl: './pack-popup-modal.component.html',
  styleUrls: ['./pack-popup-modal.component.scss']
})
export class PackPopupModalComponent implements OnInit {

  constructor(public modalRef: MDBModalRef,
    ) {}

  ngOnInit(): void {
  }

  onClose(event: any) {
    console.log(event);
  }

}
