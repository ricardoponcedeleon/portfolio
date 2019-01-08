import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import './style/about.scss';
import './style/contact.scss';
import Projects from './components/projects';
import Contact from './components/contact';
import history from './history';
import About from './components/about';




function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
         </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);