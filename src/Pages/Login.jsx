import React from 'react';
import logo from '../source/img/headphones.png'
import user from '../source/icons/header-icons/user.svg'
import passwordIcon from '../source/icons/header-icons/password-icon.jpg'
import Backbutton from '../components/Navigation/BackButton';
import { useLocation } from 'react-router-dom';

const Login = () => {

	console.log(useLocation());

	return (
		<div className ="sign-account-wrapper">
			<div className ="sign-in-account">
			<div className ="sign-in__container">
				<div className ="sign-in__logo">
					<img src={logo} alt="login-icon"></img>
					<span>beatShare.</span>
				</div>
				<div className ="sign-in__title">Login to continue</div>
				<form action="#" className ="sign-in__inputs">
					<div className ="sign-in__login-input">
						<div className ="sing-in__login-icon">
							<img src={user} alt="login-icon"></img>
						</div>
						<input type="email" placeholder="Username or email..."></input>
					</div>
					<div className ="sign-in__password-input">
						<div className ="sing-in__password-icon">
							<img src={passwordIcon} alt="password-icon"></img>
						</div>
						<input type="password" placeholder="Password..."></input>
					</div>
					<div className ="sign-in__confirm-btn">
						<input type="submit" value="Sign in"></input>
					</div>
					<Backbutton/>
				</form>
			</div>
		</div>
	</div>
	);
}

export default Login;
