import { SEND_ORDER } from '../actions/actionTypes'

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
   orders: [{
      contactInfo:{
         name: 'Raul',
         surname: 'Terhes',
         email:'raul@raul.com',
         phone: '03947564785',
         address: 'Giroc, Str. Princ, nr 3021'
      },
      date: new Date(),
      orderProducts: {
         leguma1: 1,
         leguma2: 2,
         leguma3: 3
      },
      totalPrice: 12
   },
   {
      contactInfo:{
         name: 'Raul',
         surname: 'Terhes',
         email:'raul@raul.com',
         phone: '03947564785',
         address: 'Giroc, Str. Princ, nr 3021'
      },
      date: new Date(),
      orderProducts: {
         leguma1: 1,
         leguma2: 2,
         leguma3: 3
      },
      totalPrice: 12
   },
   {
      contactInfo:{
         name: 'Raul',
         surname: 'Terhes',
         email:'raul@raul.com',
         phone: '03947564785',
         address: 'Giroc, Str. Princ, nr 3021'
      },
      date: new Date(),
      orderProducts: {
         leguma1: 1,
         leguma2: 2,
         leguma3: 3
      },
      totalPrice: 12
   },
   {
      contactInfo:{
         name: 'Raul',
         surname: 'Terhes',
         email:'raul@raul.com',
         phone: '03947564785',
         address: 'Giroc, Str. Princ, nr 3021'
      },
      date: new Date(),
      orderProducts: {
         leguma1: 1,
         leguma2: 2,
         leguma3: 3
      },
      totalPrice: 12
   },
   {
      contactInfo:{
         name: 'Raul',
         surname: 'Terhes',
         email:'raul@raul.com',
         phone: '03947564785',
         address: 'Giroc, Str. Princ, nr 3021'
      },
      date: new Date(),
      orderProducts: {
         leguma1: 1,
         leguma2: 2,
         leguma3: 3
      },
      totalPrice: 12
   }]
}

const reducer = (state = initialState, action) => {
   switch(action.type) {
      case SEND_ORDER:
         const orders = state.orders
         orders.push(action.orderData)
         
         return updateObject(state, {orders:orders})
      default: return state
   }
   
}

export default reducer