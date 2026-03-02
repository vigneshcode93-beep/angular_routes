import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-earn-tax',
  standalone: true,
  imports: [],
  templateUrl: './earn-tax.component.html',
  styleUrl: './earn-tax.component.scss'
})
export class EarnTaxComponent {
constructor( private route :ActivatedRoute , private router : Router){
   this.route.params.subscribe(params =>{
    console.log(params['id']);
  });
}

nextPage(){
this.router.navigate([],{
  queryParams:{id:20 ,sort: 'price-low-high' }, //Added query params
  //  queryParams: { sort: null }, // Removing a query parameter
  queryParamsHandling:'merge' // Added new query  with existing query params
});
  }

}
