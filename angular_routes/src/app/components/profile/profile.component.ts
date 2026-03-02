import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
constructor(private router: Router, private route: ActivatedRoute){}

navigateToUser(){
 this.router.navigate(['/user'], { relativeTo: this.route });
}
}
