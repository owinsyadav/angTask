import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor(private http: HttpClient) { }
  private apiUrl:string = "https://hn.algolia.com/api/v1/search_by_date?tags=story"
  getData() : Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
  simpleData(){
    return this.http.get(this.apiUrl)
  }
  checkData(){
    return timer(0, 10000).pipe(
           switchMap(() => this.http.get(this.apiUrl))
        );
  }
}
