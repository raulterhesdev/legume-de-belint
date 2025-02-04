import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_PRODUCT_QUANTITY, FETCH_PRODUCTS, EDIT_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from "../actions/actionTypes";

import { updateObject } from '../utility'

const initialState = {
   products: [],
   order: {},
   totalPrice: 0
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TO_CART:
         //check if an order was already started
         let updatedItem
         let updatedItems
         if(state.order){
            //if the order was started check if the current item is already in the order and if yes just copy the order in the current order 
            if(state.order[action.itemId]) {
               updatedItem = {[action.itemId]: state.order[action.itemId] + 1}
            }else {
               //else copy the current order and add the new item
               updatedItem = {[action.itemId]: 1}
            }
            updatedItems = updateObject(state.order, updatedItem)
         } else {
            updatedItems = {
               [action.itemId]: 0
            }
         }
         //get the current products price to update the total price
         const updatedProduct = state.products.filter(prod => prod.id === action.itemId)
         const updatedPrice = state.totalPrice + updatedProduct[0].price
         const updatedState = {
            order: updatedItems,
            totalPrice : updatedPrice
         }
         return updateObject(state, updatedState)
      case REMOVE_FROM_CART: 
         const updatedCart = state.order;
         delete updatedCart[action.itemId]
         const newState = {
            order: updatedCart,
            totalPrice : state.totalPrice - action.totalProductPrice
         }
         return updateObject(state, newState)
      case UPDATE_PRODUCT_QUANTITY:
         const updatedProducts = state.order;

         const newPrice = state.totalPrice + +action.newQuantity*action.productPrice - updatedProducts[action.itemId]*action.productPrice

         updatedProducts[action.itemId] = +action.newQuantity
         
         const updateState = {
            order: updatedProducts,
            totalPrice : newPrice
         }
         return updateObject(state, updateState)
      case FETCH_PRODUCTS:
         const update = {
            products: action.postData
         }
         return updateObject(state, update)
      case ADD_PRODUCT:
         const allProduct = state.products;
         allProduct.push(action.productData)
         return updateObject(state, {products: allProduct})
      case EDIT_PRODUCT:
         console.log(action.productData)
         console.log(state.products)
         const allProducts = state.products;
         const productsMap = allProducts.map(item => item.id === action.productData.id ? action.productData : item)
         
         return updateObject(state, {products: productsMap})
      case DELETE_PRODUCT:
         const allProds = state.products;
         const productMap = allProds.filter(product => product.id !== action.id)
         return updateObject(state, {products: productMap})
      default:
         return state
   }
   
}

export default reducer