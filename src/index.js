import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

ReactDOM.render(
  <BrowserRouter>
    <Navbar>
      <Switch>
        <Route exact path = "/" component={About}/>
        <Route path = "/projects" component={Projects}/>
        <Route path = "/contact" component={Contact}/>
      </Switch>
    </Navbar>
  </BrowserRouter>



  , document.getElementById('root')
);

registerServiceWorker();
