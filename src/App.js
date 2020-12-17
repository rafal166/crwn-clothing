import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage.component";
import Shop from "./pages/Shop/Shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/shop' component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;

// Switch renders only first match route
