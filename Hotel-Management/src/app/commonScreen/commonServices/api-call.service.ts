import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  postApiCall(endPoint: string, value: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
