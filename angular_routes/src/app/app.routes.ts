import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AudienceComponent } from './components/audience/audience.component';
import { EarnTaxComponent } from './components/earn-tax/earn-tax.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PromoteComponent } from './components/promote/promote.component';
import { RefundsComponent } from './components/refunds/refunds.component';
import { SchedulesComponent } from './components/schedules/schedules.component';

export const routes: Routes = [
  { path:'', component: DashboardComponent },//Eager loading
  {path:'audience', component: AudienceComponent },
  {path:'logout', component: LogoutComponent },
  {path:'promote', component: PromoteComponent },
{path:'refunds', component: RefundsComponent },
{path:'schedules', component: SchedulesComponent },
{path:'posts', loadComponent: () => import('./components/posts/posts.component').then(m => m.PostsComponent) }, //Lasy loading
{path:'profile', loadComponent: () => import('./components/profile/profile.component').then(m=>m.ProfileComponent),
children:[
  {
    path:'user', loadComponent: () => import('./components/profile/user/user.component').then(m=>m.UserComponent)
  }
]

 },

//Route Parameters Example
{path:'earn-tax/:id',loadComponent: () => import('./components/earn-tax/earn-tax.component').then(m=>m.EarnTaxComponent) },
{path:'reactiveForm', loadComponent:() => import('./components/reactive-form/reactive-form.component').then(m=>m.ReactiveFormComponent)},

];
