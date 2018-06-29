import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontOfficeComponent } from './front-office/front-office.component';

import {SuiModule} from 'ng2-semantic-ui';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SuiModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
