import React, { Component } from 'react';

class Contacts extends Component {
	render() {
		return(
			<div className="Contacts">
				<header>
					<h1>Contacts</h1>
				</header>
				<div className="Contacts-content content">
					<p>You can contact me using information below</p>

					<h3>E-mail:</h3>
					<p>filonov.egor99@mail.ru</p>

					<h3>Telephone:</h3>
					<p>+358449164716</p>
				</div>
			</div>
		);
	}
}

export default Contacts;
