import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Header from './containers/Header/Header'
import Showcase from './containers/Showcase/Showcase'
import Shop from './containers/Shop/Shop'
import Cart from './containers/Cart/Cart'
import Footer from './containers/Footer/Footer'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/magazin" component={Shop} />
        <Route path="/cos" component={Cart} />
        <Route path="/" exact component={Showcase} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
