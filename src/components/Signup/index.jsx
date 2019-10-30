import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { signupUser } from '../../store/actions/userActions';
import PropTypes from 'prop-types';

// components //#endregion
import Input from '../Input';

const Signup = () => {
	// const [ email, setEmail ] = useState('');
	// const [ password, setPassword ] = useState('');
	// const [ confirmPassword, setConfirmPassword ] = useState('');
	// const [ handle, setHandle ] = useState('');
	// const [ errors, setErrors ] = useState({
	// 	email: '',
	// 	password: '',
	// 	confirmPassword: '',
	// 	handle: ''
	// });

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const userData = {
	// 		email,
	// 		password,
	// 		confirmPassword,
	// 		handle
	// 	};
	// 	const response = await signupUser(userData, history);
	// 	console.log(response);
	// 	setErrors({ ...errors, ...response });
	// };
	return (
		<div>
			<h4 className="pb-10 text-center">Create Account</h4>
			<p className="font-14">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, voluptatibus?</p>
			<form>
				<Input type="email" placeholder="email" />
				<Input type="password" placeholder="password" />
				<Input type="password" placeholder="confirm password" />
				<Input type="text" placeholder="user handle" />
				<div className="greyline" />
				{/* {errors.general && <span>{errors.general}</span>} */}
				<div className="flex-start">
					<button className="button button-blue button-block" type="submit">
						<span>Create Account</span>
					</button>
				</div>
			</form>
		</div>
	);
};
// Signup.propTypes = {
// 	signupUser: PropTypes.func.isRequired,
// 	user: PropTypes.object.isRequired,
// 	UI: PropTypes.object.isRequired
// };
// const mapStateToProps = (state) => ({
// 	user: state.user,
// 	UI: state.UI
// });
// const mapDispatchToProps = {
// 	signupUser
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Signup);
export default Signup;
