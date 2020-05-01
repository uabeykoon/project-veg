import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'project-veg';
  isAdmin= false;

  constructor(private route:ActivatedRoute,
    private router:Router){
    console.log("sss");
  }

  onActivate(e){
    e.admin.subscribe((x)=>{
      if(x==='admin'){
        this.isAdmin=true;
      }
    });
  }

  
  
  
}
