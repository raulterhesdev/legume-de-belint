import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose , combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

import itemsReducer from './store/reducers/itemsReducer'

import adminReducer from './store/reducers/adminReducer'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    items: itemsReducer,
    admin: adminReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));



const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

serviceWorker.unregister();
