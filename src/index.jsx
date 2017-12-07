import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import CarsIndex from './containers/cars_index.jsx';
import CarsShow from './containers/cars_show.jsx';
import CarsNew from './containers/cars_new.jsx';

import '../assets/stylesheets/application.scss';
import carsReducer from './reducers/cars_reducer.js';

//const garageName = prompt("What is your garage name ?") || 'garage${Math.floor(10 + (Math.random() * 90))}';
const garageName = "Midas"
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="thin-container">
        <Switch>
          <Route path="/" exact component={CarsIndex} />
          <Route path="/cars/new" component={CarsNew} />
          <Route path="/cars/:id" component={CarsShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
