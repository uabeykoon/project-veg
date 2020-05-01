import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Output() admin = new EventEmitter<String>();
  address='';

  constructor(private route:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    
    const url: Observable<string> = this.route.url.pipe(map(segments => segments.join('')));
    url.subscribe(x=>{
      this.admin.emit(x);
    });
}

  anyFunction(){
    console.log('called from parent');
  }

}
