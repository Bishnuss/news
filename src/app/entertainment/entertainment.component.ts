import { Component } from '@angular/core';
import {NewsapiservicesService}from '../service/newsapiservices.service'

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {
  constructor(private _service:NewsapiservicesService){}

  entertainmentnewsDisplay:any = [];

  ngOnInit():void{
    this._service.entertainment().subscribe((result)=>{
      this.entertainmentnewsDisplay= result.articles;
    })

  }

}
