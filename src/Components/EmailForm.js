import React from 'react';
import './styles.css';


export default class ReverseEmail extends React.Component {
	state={
		email: ''
	}

	handleChange = (e) => {
		const email = e.target.value;
		this.setState({email});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.getEmailId(this.state.email);
		this.setState({email:''});
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input 
					id="email" 
					type="email" 
					onChange={this.handleChange}>
				</input>
				<button id="go_button" type="submit">Go!</button>
			</form>
		)
	}
}