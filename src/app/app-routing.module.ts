import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent} from './pages/orders/orders.component'
import { ProductsComponent} from './pages/products/products.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'orders',
    component: OrdersComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
