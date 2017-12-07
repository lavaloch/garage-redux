import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import CarsIndex from './containers/cars_index.jsx';

import '../assets/stylesheets/application.scss';
import carsReducer from './reducers/cars_reducer.js';

//const garageName = prompt("What is your garage name ?") || 'garage${Math.floor(10 + (Math.random() * 90))}';
const garageName = "Garage Midas"
const initialState = {
  garageName: garageName,
  cars: []
};

const reducers = combineReducers({
  garageName: (state = null, action) => state,
  cars: carsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Switch>
          <Route path="/" exact component={CarsIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
