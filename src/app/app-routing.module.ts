import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/Account/register/register.component';
import { LoginComponent } from './Components/Account/register/login/login.component';
import { BrandsComponent } from './Components/brands/brands.component';

const routes: Routes = 
[
  { path: '' , component : HomeComponent},
  { path : 'brands' , component : BrandsComponent },
  
  { path: 'Account' , children : [
    { path: 'register' , component : RegisterComponent},
    { path: 'login' , component : LoginComponent },
    { path: 'profile' , component : ProfileComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
