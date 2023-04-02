import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { NavComponent } from './Components/shared/nav/nav.component';
import { ModalComponent } from './Components/modal/modal/modal.component';
import { RegisterComponent } from './Components/Account/register/register.component';
import { LoginComponent } from './Components/Account/register/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './Components/profile/profile.component';
import { BrandsComponent } from './Components/brands/brands.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    ModalComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
