import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-pack-list',
  templateUrl: './user-pack-list.component.html',
  styleUrls: ['./user-pack-list.component.scss']
})
export class UserPackListComponent implements OnInit {

  list=[1,2,3,4,5];

  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onItemClick(number){
    this.router.navigate(['userpacks',number,'viewuserpack']);
  }

  onEditClick(number){
    this.router.navigate(['userpacks',number,'editpack']);
  }

  onCreatClick(){
    this.router.navigate(['userpacks','create'])
  }

}
