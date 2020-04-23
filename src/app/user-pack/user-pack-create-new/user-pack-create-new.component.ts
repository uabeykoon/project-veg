import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-pack-create-new',
  templateUrl: './user-pack-create-new.component.html',
  styleUrls: ['./user-pack-create-new.component.scss']
})
export class UserPackCreateNewComponent implements OnInit {

  constructor(private activatedRout:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRout.params['id']);
  }

}
