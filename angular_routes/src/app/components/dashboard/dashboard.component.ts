import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule ,MatSelectModule ,MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
 Gender: Gender[]= [
  {value: 'male', viewValue: 'Male'},
  {value: 'female', viewValue: 'Female'} ];


onSubmit(form: NgForm) {
    console.log("Form Data", form.value);
  }
}
