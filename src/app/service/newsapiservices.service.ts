import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  // newsapi
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apikey=1c5e2237fcd342bf86e1cc62c9d23654";

  // techurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apikey=1c5e2237fcd342bf86e1cc62c9d23654";

  // business
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apikey=1c5e2237fcd342bf86e1cc62c9d23654";

  // Entertainment

  entApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apikey=1c5e2237fcd342bf86e1cc62c9d23654";

  // sports 

  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apikey=1c5e2237fcd342bf86e1cc62c9d23654";

  // Health

  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apikey=1c5e2237fcd342bf86e1cc62c9d23654";





  // top ()
  topHeading() : Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  //tech news

  techNews():Observable<any>{
    return this._http.get(this.techApiUrl);
  }

  // business

  businessNews():Observable<any>
{
  return this._http.get(this.businessApiUrl)
}
// entertainment

entertainment():Observable<any>{
  return this._http.get(this.entApiUrl);
}
// sports
sports():Observable<any>{
  return this._http.get(this.sportsApiUrl);
}
// health
health():Observable<any>{
  return this._http.get(this.healthApiUrl)
}

}
