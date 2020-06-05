import firebase from '../../firebase'

import {SEND_ORDER, LOGIN, LOGOUT, LOGIN_FAIL, FETCH_ORDERS, TOGGLE_SIDEBAR} from './actionTypes';



export const sendOrder = (orderData) => {
   return{
      type: SEND_ORDER,
      orderData: orderData
   }
}

export const sendOrderData = (orderData) => {
   return dispatch => {
      var database = firebase.database();
      var newPostKey = firebase.database().ref().child('orders').push().key;
      
      var updates = {};
      updates['/orders/' + newPostKey] = orderData;

      firebase.database().ref().update(updates);
      dispatch(sendOrder(orderData))
   }
}

export const fetchOrders = (orderData) => {
   return {
      type: FETCH_ORDERS,
      orderData
   }
}

export const fetchOrderData = () => {
   return dispatch => {
      const orderData = []
      firebase.database().ref('/orders').once('value')
      .then((snapshot) => {
         for (const key in snapshot.val()){
            if (snapshot.val().hasOwnProperty(key)) {
               const element = snapshot.val()[key];
               orderData.push(element)
            }
         }
         dispatch(fetchOrders(orderData))
      }).catch(error => console.log(error));
   }
}

export const login = () => {
   return {
      type: LOGIN
   }
}

export const loginFail = (error) => {
   return {
      type: LOGIN_FAIL,
      error: error
   }
}

export const logout = () => {
   firebase.auth().signOut().then(function() {
      // Sign-out successful.
   }).catch(function(error) {
      // An error happened.
   });
   return {
      type: LOGOUT
   }
}

export const authenticate = (email, password) => {
   return dispatch => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // ...
         dispatch(loginFail(errorMessage))
      });

      
   }
}

export const toggleSidebar = () => {
   return {
      type: TOGGLE_SIDEBAR
   }
}




