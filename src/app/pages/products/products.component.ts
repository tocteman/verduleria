import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {addProduct, removeProduct} from '../../store/actions'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  availableProducts
  productsFirstColumn = []
  productsSecondColumn = []
  constructor(
    public api: ApiService,
    public store: Store
  ) {
      this.api.getProducts()
      .then((res:any) => {
        console.log(res)
        // const products = res.map(p => p)
        for (const [index, product] of res.entries()){
          index % 2 === 0 ? 
            this.productsFirstColumn.push(product):
            this.productsSecondColumn.push(product)
        }
      })
  }

  addItem(product){
    this.store.dispatch(addProduct({
      payload: product
    }))
  }
  
  removeItem(product){
    this.store.dispatch(removeProduct({
      payload: product
    }))
  }

  ngOnInit(): void {
  }

}
