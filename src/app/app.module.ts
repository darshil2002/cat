import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltorComponent } from './filtor/filtor.component';
import {HttpClientModule} from '@angular/common/http'
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FiltorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
