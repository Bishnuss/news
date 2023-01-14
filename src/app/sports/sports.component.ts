import { Component } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {

constructor (private _services:NewsapiservicesService){}
sportsnewsDisplay:any = [];

ngOnInit(): void{
  this._services.sports().subscribe((result)=>{
    this.sportsnewsDisplay = result.articles;
  })
}
}
