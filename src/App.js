import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './common.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/all.css'

import MainNav from "./components/MainNav";

import Coupons from "./routes/Coupons";
import Life from "./routes/Life";
import Pay from "./routes/Pay";
import Bank from "./routes/Bank";
import More from "./routes/More";



function App() {
  return (
    <Router>
      <div>
        <MainNav/>
        <Route exact path="/" component={Coupons}></Route>
        <Route path="/life" component={Life}></Route>
        <Route path="/pay" component={Pay}></Route>
        <Route path="/bank" component={Bank}></Route>
        <Route path="/more" component={More}></Route>
      </div>
    </Router>

  );
}

export default App;
