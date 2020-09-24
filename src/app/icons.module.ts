import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { ShoppingCart } from 'angular-feather/icons';

const icons = {
  ShoppingCart
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
