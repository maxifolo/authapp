import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Auth0 module */
import { AuthModule } from "@auth0/auth0-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { PricesComponent } from './components/prices/prices.component';
import { AuthButtonComponent } from './components/auth/auth-button/auth-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtectedComponent,
    PricesComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: '', //load domain and clientId of Auth0 user
      clientId: ''
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
