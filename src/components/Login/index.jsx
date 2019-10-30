import React from 'react';

const Login = ({ closeModal }) => {
	return (
		<div>
			<h4 className="pb-10 text-center">Log In</h4>
			<p className="font-14">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, voluptatibus?</p>
			<form>
				<div className="input-control">
					<input className="input-field" type="email" placeholder="email" />
				</div>
				<div className="input-control">
					<input className="input-field" type="password" placeholder="password" />
				</div>
				<div className="greyline" />
				<div className="flex-start">
					<button className="button button-blue button-block" onClick={() => closeModal()}>
						Log In
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
