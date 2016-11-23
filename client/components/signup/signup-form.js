import React from 'react';
import Timezones from '../../data/timezones';
import _ from 'lodash';
import validateInput from '../../../server/sharefolder/validations/signup';
import TextFieldGroup from '../common/text-field-group';
import PullDownList from '../common/pulldown-list';

//import axios from 'axios';

class SignupForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone:'',
			errors:{},
			isLoading: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value });
	}

	isValid(){
		
		const {errors, isValid} = validateInput(this.state);
		
		if (!isValid){
			this.setState({errors});
		}

		return isValid;
	}

	onSubmit(e){
		
		e.preventDefault();

		if (this.isValid()){
		this.setState({errors: {}, isLoading: true });
		//axios.post('/api/users', {user: this.state});
		this.props.userSignupRequest(this.state)
		.then(	(response) => {
				
				this.props.addFlashMessage({
					type: 'success',
					text: 'You signed up successfully, Welcome!'
				});
				this.context.router.push('/');
			})
		.catch(function (error){
				console.log("error:  ", error);
				console.log("error.message: ", error.message);
        		console.log("error.code: ", error.code);
        		console.log("error.config: ", error.config);
        		console.log("error.response: ", error.response);
        		//console.log("error.response.data: ", error.response.data);
        		console.log(this);
				//this.setState({ errors:error.response.data, isLoading: false });
			  }
			);
		}
	}

	render(){
		const { errors } = this.state;

		const options = _.map(Timezones, (val, key) =>
			<option key={val} value={val}>{key}</option>
			); 
		return(
			<form onSubmit={this.onSubmit}>
				<h1> Join our community</h1>

				<TextFieldGroup
					error={errors.username || ''}
					label="Username"
					onChange={this.onChange}
					value={this.state.username}
					field="username"
				/>	

				<TextFieldGroup
					error={errors.email || ''}
					label="Email"
					onChange={this.onChange}
					value={this.state.email}
					field="email"
				/>

				<TextFieldGroup
					error={errors.password || ''}
					label="Password"
					onChange={this.onChange}
					value={this.state.password}
					field="password"
				/>

				<TextFieldGroup
					error={errors.passwordConfirmation || ''}
					label="PasswordConfirmation"
					onChange={this.onChange}
					value={this.state.passwordConfirmation}
					field="passwordConfirmation"
				/>

				<PullDownList
					error={errors.timezone}
					label="Timezone"
					onChange={this.onChange}
					value={this.state.timezone}
					field="timezone"
					options={options}
				/>


				<div className="form-group">
					<button disabled = {this.state.isLoading} className="btn btn-primary btn-lg">
					 sign up
					</button>
				</div>	

			</form>

		)
	}
}


SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired,
	addFlashMessage: React.PropTypes.func.isRequired

}

SignupForm.contexTypes = {
	router: React.PropTypes.object.isRequired
}
export default SignupForm;