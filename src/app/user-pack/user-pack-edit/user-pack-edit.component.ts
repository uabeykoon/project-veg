import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-pack-edit',
  templateUrl: './user-pack-edit.component.html',
  styleUrls: ['./user-pack-edit.component.scss']
})
export class UserPackEditComponent implements OnInit {

  id ='';

  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }

}
