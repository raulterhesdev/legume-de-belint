import { SEND_ORDER, LOGIN, LOGIN_FAIL, LOGOUT, FETCH_ORDERS, TOGGLE_SIDEBAR } from '../actions/actionTypes'

import { updateObject } from '../utility'

const initialState = {
   showcaseTitle: 'Lorem ipsum, dolor sit',
   showcaseContent: [
      {
         title: 'Lorem ipsum, dolor sit',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea quam deleniti iusto, velit tempora neque. Quaerat, illo provident nesciunt dicta harum impedit perferendis possimus voluptatum error ex dolore odit ducimus inventore aliquam sit, a ipsam itaque numquam necessitatibus eveniet!'
      },
      {
         title: 'Lorem ipsum, dolor sit',
         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea quam deleniti iusto, velit tempora neque. Quaerat, illo provident nesciunt dicta harum impedit perferendis possimus voluptatum error ex dolore odit ducimus inventore aliquam sit, a ipsam itaque numquam necessitatibus eveniet!'
      },
   ],
   carouselItems: [
      {
         url: require('../../assets/images/carousel/carousel (3).jpg'),
         legend:"Text 1"
      },
      {
         url: require('../../assets/images/carousel/carousel (4).jpg'),
         legend:"Text 1"
      },
      {
         url: require('../../assets/images/carousel/carousel (5).jpg'),
         legend:"Text 1"
      },
      {
         url: require('../../assets/images/carousel/carousel (6).jpg'),
         legend:"Text 1"
      },
      {
         url: require('../../assets/images/carousel/carousel (7).jpg'),
         legend:"Text 1"
      }
   ],
   orders: [],
   isLoggedIn: false,
   error: null,
   sidebarOpen: false
}

const reducer = (state = initialState, action) => {
   switch(action.type) {
      case SEND_ORDER:
         const orders = state.orders
         orders.push(action.orderData)
         
         return updateObject(state, {orders:orders})
      case FETCH_ORDERS:
         const update = {
            orders: action.orderData
         }
         return updateObject(state, update)
      case LOGIN: 
         return{
            ...state,
            isLoggedIn:true,
            error: null
         }
      case LOGIN_FAIL:
         return {
            ...state,
            error: action.error
         }
      case LOGOUT:
         return{
            ...state,
            isLoggedIn: false
         }
      case TOGGLE_SIDEBAR:
         return {
            ...state,
            sidebarOpen: !state.sidebarOpen
         }
      default: return state
   }
   
}

export default reducer