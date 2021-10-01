import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';

import { BackgroundComponent } from './background/background.component';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
