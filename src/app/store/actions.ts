import { createAction, props } from '@ngrx/store';

interface Product {
  name: string;
  price: number;
  description: string;
  id: string;
}

export const addProduct = createAction(
  'ADD PRODUCT',
  props<{payload: Product}>()
)

export const removeProduct = createAction(
  'REMOVE PRODUCT',
  props<{payload: Product}>()
)

export const clearProducts=createAction(
  'CLEAR PRODUCTS'
)