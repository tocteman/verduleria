import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { IconsModule } from "./icons.module";
import {StoreModule} from '@ngrx/store'
import { cartReducer } from './store/reducers';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IconsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({CartState:cartReducer}),
    MatExpansionModule
  ],
  declarations: [
    AppComponent,
    OrdersComponent,
    ProductsComponent,
    CartComponent,
    OrderDetailsComponent,
    HeaderComponent,
    SidebarComponent,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
