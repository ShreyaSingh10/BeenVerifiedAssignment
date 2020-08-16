import React from 'react';
import EmailForm from './EmailForm.js';
import './styles.css';

export default class ResultPage extends React.Component {
	render() {
		const { name, description, address, phoneNumbers, email, relatives } = this.props;
		return(
			<div id="result_contaniner">
				<h1 className="result_heading">Result</h1>
				<p className="result_text">Look at the result below to see the 
				details of person you have searched for.</p>
				<div id="user_info_card">
					<img></img>
					<h2>{name}, 35</h2>
					<p>{description}</p>
					<div id="address_and_phone">
						<span id="address">
							<h5>Address</h5>
							<p>{address}</p>
						</span>
						<span id="phone">
						    <h5>Phone Numbers</h5>
						    {phoneNumbers.map((phone)=> {
						    	return(<p>{phone}</p>)
						    })}
					   	</span>
					</div>
					<div id="email_and_relatives">
						<span id="emailid">
							<h5>Email</h5>
							<p>{email}</p>
						</span>
						<span id="relatives">
						    <h5>Relatives</h5>
						    {relatives.map((relative)=> {
						    	return(<p>{relative}</p>)
						    })}
					   	</span>
					</div>
				</div>
				<div className="email_result_section">
					<h1 className="heading">Search Any Email Address</h1>
					<p className="text">Start Here - Look up the owner's name,
						photos and online profiles. See What you find!</p>
					<EmailForm getEmailId={this.props.getEmailId}/>
					<p className="msg_text">Enter Any Email Address. They won't be notified</p>
				</div>
			</div>	
		)
	}
}