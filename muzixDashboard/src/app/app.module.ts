import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './admin/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { SlideBarBodyComponent } from './admin/slide-bar-body/slide-bar-body.component';
import { TrackComponent } from './admin/track/track.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SlideBarBodyComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatInputModule,
    AppRoutingModule,MatSidenavModule,MatCardModule,
    BrowserAnimationsModule,MatIconModule,MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
