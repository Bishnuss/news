import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path: '', component:TopheadingComponent},
  {path: 'tech', component:TechnewsComponent},   //tech
  {path: 'business', component: BusinessnewsComponent},
  {path: 'entr', component: EntertainmentComponent},
  {path: 'sports', component:SportsComponent },
  {path: 'health', component: HealthComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
