import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import {InicializarKeycloack} from '../AppInit';
import {AuthService} from './services/authentication/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: InicializarKeycloack,
      multi: true,
      deps:[KeycloakService]
    }, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
