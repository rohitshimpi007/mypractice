import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient){}
  apiurl = "http://localhost:3000"
  postApiCall(endPoint: string, value: any) {
    let ApiUrl = this.apiurl + "/" + endPoint;
    return this.http.post(ApiUrl,value)
  }

 
}
