import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';


import reducers from './reducers';
import './scss/header.scss';
import Header from './components/header';
import Biography from './components/biography';
import Contact from './components/contact';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/biography" component={Biography} />
          <Route path="/" component={Header} />
        </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
