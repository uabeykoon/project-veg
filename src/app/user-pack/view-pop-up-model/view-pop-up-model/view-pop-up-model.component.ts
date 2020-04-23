import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-pop-up-model',
  templateUrl: './view-pop-up-model.component.html',
  styleUrls: ['./view-pop-up-model.component.scss']
})
export class ViewPopUpModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClose(event: any) {
    console.log(event);
  }

  onClickEdit(){

  }

}
