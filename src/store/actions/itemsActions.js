import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_PRODUCT_QUANTITY} from './actionTypes';

export const addToCart = (itemId) => {
   return {
      type: ADD_TO_CART,
      itemId: itemId
   }
}

export const removeFromCart = (itemId, totalProductPrice) => {
   return {
      type: REMOVE_FROM_CART,
      itemId,
      totalProductPrice
   }
}

export const updateProductQuantity = (itemId, newQuantity, productPrice) => {
   return {
      type: UPDATE_PRODUCT_QUANTITY,
      itemId,
      newQuantity,
      productPrice
   }
}


