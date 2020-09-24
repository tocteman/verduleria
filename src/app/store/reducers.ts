import {createReducer, on, Action} from '@ngrx/store'

import { addProduct, removeProduct, clearProducts } from './actions';

export const initialState = {
  details: [],
  // id: uuidv4()
}

function itemAdder(details, payload){
  const newDetails = details.map(item => ({...item}))
  const index = newDetails.findIndex(item=> item.id === payload.id)
  console.log(index)
  if (index === -1) {
    const {id, price, name, description} = payload
    const newItem = [{id, price, name, description, quantity:1}]
    return newDetails.concat(newItem)
  } else {
    newDetails[index].quantity +=1
    return newDetails
  }
}

function itemDecreaser(details, payload){
  const newDetails = details.map(item=> ({...item}))
  const index = newDetails.findIndex(item => item.id === payload.id)
  if (index === -1 ) return newDetails
  if (newDetails[index].quantity > 1){
    newDetails[index].quantity -=1 
    return newDetails
  } else {
    return newDetails.filter(item => item.id !== payload.id )
  }
}

const reducer = createReducer(
  initialState,
  on(addProduct, (state, {payload})=> {
    return {
      ...state, 
      details: itemAdder(state.details, payload),
    }
  }),
  on(removeProduct, (state, {payload})=> {
    return {
      ...state,
      details: itemDecreaser(state.details, payload)
    }
  }),
  on(clearProducts, ()=> {
    return initialState
  })
)

export function cartReducer(state, action:Action){
  return reducer(state, action)
}