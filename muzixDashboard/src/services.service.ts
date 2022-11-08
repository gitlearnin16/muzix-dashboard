import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public napsterUrl = 'https://api.napster.com/v2.2/artists/top';
  public apiKey = '21627bf2-c4cd-40fa-a05d-e92c04932652';

  constructor(private httpclient:HttpClient) { }
  public getAlltracks(){
    const alltracks =this.httpclient.get(this.napsterUrl+ this.apiKey);
    console.log(alltracks)
    return this.getAlltracks
  }
}
