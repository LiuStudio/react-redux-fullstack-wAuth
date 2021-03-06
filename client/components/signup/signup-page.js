import React from 'react';
import SignupForm from './signup-form';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signup-actions';
import { addFlashMessage } from '../../actions/flash-messages';

 class SignupPage extends React.Component {
 	render() {
 		const {userSignupRequest, addFlashMessage} = this.props;
 	return(
 		<div className="row">
 			<div className="col-md-4 col-md-offset-4">
 				<SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} /> 
 			</div>
 		</div>
 		);
 	}
 }

SignupPage.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired,
	addFlashMessage: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) =>{
 return {}
};

//const mapDispatchToProps = (dispatch) => {
//	const userSignupRequest = dispatch(userSignupRequest);
//}

 export default connect(mapStateToProps, {userSignupRequest, addFlashMessage})(SignupPage);
