import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  currentOrders = []
  constructor(
    public api: ApiService
  ) {
    this.getOrders()
  }

  ngOnInit(): void {
  }

  getOrders(){
    this.api.getOrders()
    .then((res:any) => {
      this.currentOrders = res.map(order => ({
        id: order.id,
        details: JSON.parse(order.details),
        subtotal: order.subtotal,
        total: order.total
      }))
    })
  }

  orderRefresh(){
    this.getOrders() 
  }

}
