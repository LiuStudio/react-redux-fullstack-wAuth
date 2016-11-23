import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import RootReducer from './reducers/root-reducer';

import routes from './routes';

const store = createStore(
	 RootReducer,
	 compose (
	 	applyMiddleware(thunk),
	 	window.devToolsExtension ? window.devToolsExtension() : f => f
	 	)
	 
	);

render(
	<Provider store={store}>
	    <Router history={browserHistory} routes={routes} /> 
	</Provider>, document.getElementById('app')
	);