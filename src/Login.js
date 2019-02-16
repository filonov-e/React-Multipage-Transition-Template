import React, { Component } from 'react';
import { AUTH_TOKEN } from './constants'
import { createStore } from 'redux'

class Login extends Component {
	state = {
		login: true,
		email: '',
		password: '',
		name: ''
	}

	render() {
		const { login, email, password, name } = this.state

		return(
			<div className="Login container-fluid" id="login">
				<div className="row header">
					<div className="col-md h1">{login ? 'Login' : 'Signup'}</div>
				</div>

				<div className="Login-content container col-md-6">
					<div className="row">
						{!login && (
							<div className="col-md">
								<input
									value={name}
									onChange={e => this.setState({ name: e.target.value })} 
									type="text"
									placeholder="Your name"
								/>	
							</div>
						)}
						
						<div className="col-md">
							<input
					            value={email}
					            onChange={e => this.setState({ email: e.target.value })}
					            type="text"
					            placeholder="Your email address"
					       	/>
						</div>
						<div className="col-md">
							<input
					            value={password}
					            onChange={e => this.setState({ password: e.target.value })}
					            type="password"
					            placeholder={login ? "Password" : "Choose a safe password"}
					   		/>
						</div>	
					</div>
					<div className="row">
						<div className="button col-md mx-4 align-middle" onClick={() => this._confirm()}>
							{login ? 'login' : 'create account'}
						</div>

						<div
				         	className="button col-md mx-4"
				          	onClick={() => this.setState({ login: !login })}
				     	>
				        	{login
				              ? 'need to create an account?'
				              : 'already have an account?'}
				        </div>
					</div>
				</div>
			</div>
		);
	}

	_confirm = async () => {
		// login/logout test
		if ((this.state.login && this.state.email && this.state.password) || (this.state.name && this.state.email && this.state.password)){
			this._saveUserData(this.state.email)
			window.location.href = "/profile"
		} else {
			alert("Fill all the fields!");
		}
		// login/logout test end
	}
	
	_saveUserData = token => {
    	localStorage.setItem(AUTH_TOKEN, token)
  	}
}

export default Login;
