import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promote',
  standalone: true,
  imports: [],
  templateUrl: './promote.component.html',
  styleUrl: './promote.component.scss'
})
export class PromoteComponent {
constructor( private route :ActivatedRoute){
   const category =  this.route.snapshot.queryParams['category'];
   this.route.snapshot.queryParams['page'];
   console.log(category);
   // both we can use
   this.route.queryParamMap.subscribe(params => {
    const category = params.get('category');
    const page = params.get('page');
    console.log(category , page);
  });

}

}
