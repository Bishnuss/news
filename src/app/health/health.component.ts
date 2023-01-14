import { Component } from '@angular/core';
import{NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  constructor(private _services:NewsapiservicesService){}
  healthnewsDisplay:any =[];
  ngOnInit(): void{
    this._services.health().subscribe((result)=>{
      this.healthnewsDisplay = result.articles;
    })
  

  }
  

}
