import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// component
import Modal from '../Modal';
import Signup from '../Signup';
import Login from '../Login';

// Navbar
import './Navbar.scss';

const Navbar = () => {
	const[isOpen, toggleModal] = useState(false);
	const[currentModal, setCurrentModal] = useState(<Signup />)

const closeModal = () => {
	toggleModal(false);
}

const handleLink = (type) => () => {
	type === 'login'
		? setCurrentModal(<Login />)
		: setCurrentModal(<Signup />)

	toggleModal(true)
}

		return (
			<div className="header">
				<nav className="navbar white fixed-top">
					<div className="container">
						<div className="brand">
							<Link to="/" className="navbar-item">
								<svg
									width="22"
									height="12"
									viewBox="0 0 22 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11 7V11"
										stroke="#48B166"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M15.24 5.24L18.07 8.07"
										stroke="#48B166"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M1 1H5"
										stroke="#48B166"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M17 1H21"
										stroke="#48B166"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M3.93005 8.07L6.76005 5.24"
										stroke="#48B166"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</Link>
							<Link
								to="/"
								role="button"
								className="navbar-burger burger"
								aria-label="menu"
								aria-expanded="false"
								data-target="navMenu"
							>
								<span aria-hidden="true" />
								<span aria-hidden="true" />
								<span aria-hidden="true" />
							</Link>
						</div>
						<div className="nav-menu" id="navMenu">
							<div className="navbar-left">
								<Link to="/" className="navbar-item">
									Home
								</Link>
							</div>
							<div className="navbar-right">
								<div className="navbar-item">
									<button className="button button-green shadow button-click" onClick={handleLink('signup')}>Sign Up</button>
								</div>
								<div className="navbar-item">
									<button className="button button-default button-plain" onClick={handleLink('login')}>Log In</button>
								</div>
								<div className="navbar-item" />
							</div>
						</div>
					</div>
				</nav>
				{
					<>
						<Modal isOpen={isOpen} closeModal={closeModal}>
							{currentModal}
						</Modal>
					</>

				}
			</div>
		);
	
}

Navbar.propTypes = {};

export default Navbar;
