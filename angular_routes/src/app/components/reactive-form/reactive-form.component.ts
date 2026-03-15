import { Component, Inject, inject, model, OnInit, effect, signal, computed, Signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserService } from '../../../user.service';
import { toSignal } from '@angular/core/rxjs-interop';


interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {
  Gender: Gender[] = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' }];

  totalZipCount!: Signal<number>;
  userFormSignal:any;
  readonly checked = model(false);
  readonly indeterminate = model(false);

  userForm: FormGroup;
  addForm: FormGroup;
  addFormData: any;

  private user = inject(UserService);
  usedData = this.user.user$;

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
      name: ['', Validators.required],
      nickname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required]
    });

    this.addForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', Validators.required],
        suite: ['', Validators.required],
        city: ['', Validators.required],
        zipcode: ['', Validators.required],
        geo: this.fb.group({
          lat: ['', Validators.required],
          lng: ['', Validators.required]
        })
      })
    });

    this.addFormData = toSignal(this.addForm.valueChanges);

    // Patch the form once after the user data loads. Avoid re-patching on every form change.
    let hasPatched = false;  // Flag to ensure we only patch once when data is loaded.
    effect(() => {
      const users = this.usedData();
      console.log('Initial User EFFECT:', this.usedData());
      console.log('User data loaded:', users);
      if (users.length && !hasPatched) {
        hasPatched = true;
        this.addForm.patchValue(users[0]);
      }
    });

    // Log form value changes separately.
    effect(() => {
      console.log('Add Form Data:', this.addFormData());
    });

    //computed signal to
    this.totalZipCount = computed(() => {
      const value = this.addForm.value;
      return value.address.zipcode.length;
    });
  }

  ngOnInit() {
    this.user.loadUsers();

    // without signal need manula subscription to value changes

    // this.addForm.valueChanges.subscribe((value) => {
    //   console.log("Form Data", value);
    // });

  }

  onSubmit() {
    console.log("Form Data", this.userForm.value);
    console.log("Form Data", this.addForm.value);
  }
}

