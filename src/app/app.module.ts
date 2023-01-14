import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http';
import{NewsapiservicesService} from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    EntertainmentComponent,
    SportsComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarRouterModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
