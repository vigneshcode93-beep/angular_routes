import { Injectable, signal } from '@angular/core';
import { Users } from './users.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSignal = signal<Users[]>([]);
  loading = signal(false);

  user$ = this.userSignal.asReadonly();
  constructor(private http: HttpClient) { }

  loadUsers(){
    this.loading.set(true);
    this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
      this.userSignal.set(data);
       this.loading.set(false);
    });
  }
}
