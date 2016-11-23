import React from 'react';
import NavigationBar from './navigation-bar';
import FlashMessagesList from './flash/flash-messages-list';

class App extends React.Component {
	render() {
		return(
			<div className="container">
				<NavigationBar />
				<FlashMessagesList />
				{this.props.children}
			</div>
		);
	}
}

export default App;