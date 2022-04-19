import React from 'react';
import logo from '../source/img/headphones.png';
import Backbutton from '../components/Navigation/BackButton';

const Createaccount = () => {
	return (
	
	<div className="create-account-wrapper">
		<div className="create-account">
			<div className="create-account__countainer">
				<div className="create-account__logo">
					<img src={logo} alt="logo"></img>
					<span>beatShare.</span>
				</div>
				<form action="#" className="create-account__form">
					<div className="create-account__title">Create account</div>
					<div className="create-account__login">
						<div className="create-account__subtitle">Login</div>
						<div className="create-account__inputs">
							<div className="create-account__email-block">
								<input type="email" placeholder="Email..."></input>
							</div>
							<div className="create-account__username-block">
								<input type="text" placeholder="Username..."></input>
							</div>
						</div>
					</div>
					<div className="create-account__password">
						<div className="create-account__subtitle">Password</div>
						<div className="create-account__inputs">
							<div className="create-account__password-block">
								<input type="password" placeholder="Password..."></input>
							</div>
							<div className="create-account__password-confirm-block">
								<input type="password" placeholder="Confirm password..."></input>
							</div>
						</div>
					</div>
					<div className="create-account__btn-confim">
						<input type="submit" value="Create account"></input>
					</div>
					<Backbutton/>
				</form>
			</div>
		</div>
	</div>
	);
}

export default Createaccount;
