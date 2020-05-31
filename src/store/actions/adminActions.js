import {SEND_ORDER} from './actionTypes';

export const sendOrder = (orderData) => {
   return{
      type: SEND_ORDER,
      orderData: orderData
   }
}