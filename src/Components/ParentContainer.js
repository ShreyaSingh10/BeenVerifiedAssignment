import React from 'react';
import EmailForm from './EmailForm.js';
import ReverseEmail from './ReverseEmail.js';
import ResultPage from './ResultPage.js';
import axios from 'axios';
import './styles.css';
//import Logo from './Logo.svg';

export default class ParentContainer extends React.Component {
	state={
		showResult: false,
		name:'',
		description:'',
		address:'',
		phoneNumbers:[],
		email:'',
		relatives: []
	}

	getEmailId = () => {
		axios.get( "https://cors-anywhere.herokuapp.com/"+
			"https://ltv-data-api.herokuapp.com/api/v1/records.json?email=doesmith@example.com").
		then(response =>
			this.setState({
			name: response.data.first_name + response.data.last_name,
			description: response.data.description,
		 	address: response.data.address,
			phoneNumbers: response.data.phone_numbers,
			email: response.data.email,
			relatives: response.data.relatives,
			showResult: true
		})
		)
		.catch(err => console.log("ERR", err));
	}
	render() {
		const { name, description, address, phoneNumbers, email, relatives } = this.state;
		return(
			<div>
				<div className="fixed_top_bar">
				{this.state.values}
				</div>
				{!this.state.showResult &&
				<div className="email_container">
					<div className="email_section">
						<h1 className="heading">Search Any Email Address</h1>
						<p className="text">Start Here - Look up the owner's name,
						photos and online profiles. See What you find!</p>
						<EmailForm getEmailId={this.getEmailId}/>
						<p className="msg_text">Enter Any Email Address. They won't be notified</p>
					</div>
					<ReverseEmail/>
				</div>
				}
				{this.state.showResult &&
				<ResultPage 
					name = {name}
					description = {description}
				 	address = {address}
					phoneNumbers = {phoneNumbers}
					email = {email}
					relatives = {relatives}
					getEmailId={this.getEmailId}
				/>
				}
				<div className="fixed_bottom_bar"></div>
			</div>	
		)
	}
}