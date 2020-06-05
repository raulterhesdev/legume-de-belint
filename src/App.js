import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Header from './containers/Header/Header'
import Showcase from './containers/Showcase/Showcase'
import Shop from './containers/Shop/Shop'
import Cart from './containers/Cart/Cart'
import Footer from './containers/Footer/Footer'
import Admin from './containers/Admin/Admin'
import Login from './containers/Login/Login'
import Sidebar from './components/UI/Sidebar/Sidebar'


function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/admin" component={Admin} />
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
