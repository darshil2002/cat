import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { cat } from './main-interface';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService implements OnInit{

  mainUrl='https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_tGIFiQMiDODWoiPsTzkgEOeuiEFAvkSVRG97YnbP16jUBAfOZRdKoHJHbRXx0FUI'
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }

  getMainData(){
    return  this._http.get<cat[]>(this.mainUrl)
  }

}
