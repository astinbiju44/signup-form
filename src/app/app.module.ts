import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistrictComponent } from './pages/district/district.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './utilites/header/header.component';
import { NavbarComponent } from './utilites/navbar/navbar.component';
import { FooterComponent } from './utilites/footer/footer.component';
import { SinglepageComponent } from './singlepage/singlepage.component';

@NgModule({
  declarations: [
    AppComponent,
    DistrictComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SinglepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
