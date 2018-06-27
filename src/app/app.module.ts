import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontOfficeComponent } from './front-office/front-office.component';

import {SuiModule} from 'ng2-semantic-ui';
import { ShowTrajetComponent } from './show-trajet/show-trajet.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent,
    ShowTrajetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
