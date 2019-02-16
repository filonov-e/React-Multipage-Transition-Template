import React, { Component } from 'react';

class Contacts extends Component {
	render() {
		return(
			<div className="Contacts container-fluid">
				<div className="row header">
					<div className="col-md h1 text-center text-dark">Contacts</div>
				</div>
				<div className="Contacts-content content container col-md-4 p-5">
					<div className="row">
						<div className="col-md text-left">E-mail:</div>
						<div className="col-md h5 text-left">filonov.egor99@mail.ru</div>
					</div>
					<div className="row">
						<div className="col-md text-left">Telephone:</div>
						<div className="col-md h5 text-left">+358449164716</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contacts;
