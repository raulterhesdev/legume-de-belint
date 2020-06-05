import firebase from '../../firebase'
import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_PRODUCT_QUANTITY, FETCH_PRODUCTS, EDIT_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT} from './actionTypes';

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

export const fetchData = (postData) => {
   return {
      type: FETCH_PRODUCTS,
      postData: postData
   }
}

export const fetchProductData = () => {
   return dispatch => {
      const postData = []
      firebase.database().ref('/products').once('value')
      .then((snapshot) => {
         for (const key in snapshot.val()){
            if (snapshot.val().hasOwnProperty(key)) {
               const element = snapshot.val()[key];
               element.price = +element.price
               postData.push(element)
            }
         }
         dispatch(fetchData(postData))
      }).catch(error => console.log(error));
      
      
   }
}

export const addProduct = (productData) => {
   return{
      type: ADD_PRODUCT,
      productData: productData
   }
}

export const addProductData =  (productData) => {
   return async dispatch => {
      var database = firebase.database();
      var newPostKey = firebase.database().ref().child('products').push().key;
      
      // Write the new post's data simultaneously in the posts list and the user's post list.
      productData.id = newPostKey
      var updates = {};
      updates['/products/' + newPostKey] = productData;

      firebase.database().ref().update(updates);
      dispatch(addProduct(productData))
   }
}

export const editProduct = (productData) => {
   return{
      type: EDIT_PRODUCT,
      productData: productData
   }
}

export const editProductData =  (productData, editId) => {
   return async dispatch => {
      var database = firebase.database();
      
      productData.id = editId
      var updates = {};
      updates['/products/' + editId] = productData;

      firebase.database().ref().update(updates);
      dispatch(editProduct(productData))
   }
}

export const deleteProduct = (id) => ({
   type: DELETE_PRODUCT,
   id
})

export const deleteProductData = (id) => {
   return async dispatch => {
      var database = firebase.database();
      
      var updates = {};
      updates['/products/' + id] = null;

      firebase.database().ref().update(updates);
      dispatch(deleteProduct(id))
   }
}


