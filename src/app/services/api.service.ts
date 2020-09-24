import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';

const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
} 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  products
  constructor(
    public http: HttpClient,
  ) {
  }

  getProducts(){
    return this.http.get(`${environment.apiUrl}products`)
    .pipe(
      map(res => {
        return res
      })
    ).toPromise()
  }

  getOrders(){
    const userId = localStorage.getItem("userId")
    console.log(userId)
    return this.http.get(`${environment.apiUrl}orders/users/${userId}`)
    .pipe(
      map(res => {
        return res
      })
    ).toPromise()
  }

  

  dispatchOrder(order){
    return this.http.post(`${environment.apiUrl}orders/${order.id}`, order)
    .pipe(
      map(res=> {
        return res
      })
    ).toPromise()
  }

}
