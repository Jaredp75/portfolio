import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from '../src/registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

ReactDOM.render(
  <BrowserRouter>
    <Navbar>
      <Switch>
        <Route exact path = "/portfolio" component={Portfolio}/>
        <Route path = "/about" component={About}/>
        <Route path = "/projects" component={Projects}/>
        <Route path = "/contact" component={Contact}/>
      </Switch>
    </Navbar>
  </BrowserRouter>



  , document.getElementById('root')
);

registerServiceWorker();
