import React, { Component } from 'react';
import { AUTH_TOKEN } from './constants'

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
			<div className="Signup">
				<header>
					<h1>{login ? 'Login' : 'Signup'}</h1>
				</header>

				<div className="Signup-content">
					<div>
						{!login && (
						<input
							value={name}
							onChange={e => this.setState({ name: e.target.value })} 
							type="text"
							placeholder="Your name"
						/>	
						)}
						<input
				            value={email}
				            onChange={e => this.setState({ email: e.target.value })}
				            type="text"
				            placeholder="Your email address"
				       	/>
				       	<input
				            value={password}
				            onChange={e => this.setState({ password: e.target.value })}
				            type="password"
				            placeholder={login ? "Password" : "Choose a safe password"}
				   		/>	
					</div>
					<div>
						<div className="button" onClick={() => this._confirm()}>
							{login ? 'login' : 'create account'}
						</div>

						<div
				         	className="button"
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
		this._saveUserData(this.state.email)
		window.location.href = "/profile"
		// login/logout test end
	}
	
	_saveUserData = token => {
    	localStorage.setItem(AUTH_TOKEN, token)
  	}
}

export default Login;
