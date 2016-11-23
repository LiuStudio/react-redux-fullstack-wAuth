import React from 'react';
import FlashMessage from './flash-message';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../../actions/flash-messages';


class FlashMessagesList extends React.Component {
    render() {
    	const messages = this.props.messages.map(message => 
    		<FlashMessage key ={message.id} message={message} deleteFlashMessage = {this.props.deleteFlashMessage} />
    		);
        return (
            <div>{messages}</div>
        );
    }
}


FlashMessagesList.propTypes = {
        messages: React.PropTypes.array.isRequired,
        deleteFlashMessage: React.PropTypes.func.isRequired
    }

function mapStateToProps(state){
	return{
		messages: state.FlashMessages
	}
}


export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
