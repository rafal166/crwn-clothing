import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.sass';
import Homepage from './pages/Homepage/Homepage.component';
import Shop from './pages/Shop/Shop.component';
import Header from './components/Header/Header.component';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;

// Switch renders only first match route
