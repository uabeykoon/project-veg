import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-float-btn',
  templateUrl: './float-btn.component.html',
  styleUrls: ['./float-btn.component.scss'],

})
export class FloatBtnComponent implements OnInit {

  constructor(private router :Router){}

  ngOnInit(): void {
  }

  onbtnClicked(){
    this.router.navigate(['/cartview']);
  }

}
