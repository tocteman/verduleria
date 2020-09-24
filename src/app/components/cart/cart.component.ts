import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { v4 as uuidv4 } from 'uuid';
import { clearProducts } from 'src/app/store/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  stateWatcher$: Observable<any>
  orderState
  constructor(
    private store: Store,
    public api: ApiService
  ) { 
    this.stateWatcher$ = this.store
    .select(state => {return state})
    this.stateWatcher$
    .pipe(
      map(s => {return s})
    )
    .subscribe(s => {
      this.orderState = s.CartState
      console.log(this.orderState)
    })
  }

  ngOnInit(): void {
  }

  calculateSubtotal(){
    const pricePerItem = this.orderState.details.map(d => d.price * d.quantity)
    const sub= pricePerItem.reduce((acc, cum)=> acc + cum, 0) 
    return sub.toFixed(2)
  }

  calculateTotal(){
    const sub = Number(this.calculateSubtotal())
    const plusTaxes = sub + (sub*0.12)
    return plusTaxes.toFixed(2)
  }

  sendOrder(){
    const userId = localStorage.getItem("userId")
    const orderId = uuidv4()
    const orderObj = {
      userId: userId,
      details: JSON.stringify(this.orderState.details),
      subtotal: Number(this.calculateSubtotal()),
      total: Number(this.calculateTotal()),
      id: orderId
    }
    this.api.dispatchOrder(orderObj)
    .then(()=> {
      this.store.dispatch(clearProducts())
    })
  }


}
