import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Greeting from './components/greetings';
import SignupPage from './components/signup/signup-page';


export default(
	<Route path="/" component={App} >
		<IndexRoute component={Greeting} />
		<Route path="signup" component={SignupPage} />
	</Route>
)