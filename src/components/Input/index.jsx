import React from 'react';

const Input = (props) => {
	let { size, type, value, disabled, error, onChange, placeholder, className } = props;
	// type = !type ? 'text' : type;
	// size = !size ? 'input-field' : size;
	console.log(props);
	return (
		<div className="input-control">
			<input
				className={`input-field ${className} ${error ? 'error' : ''}`}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			{error && <span>{error}</span>}
		</div>
	);
};

export default Input;
