import React from 'react';

// styles
import './Modal.scss';

const Modal = (props) => {
	let modal = (
		<div className="modal">
			<div className="modal-content modal-content-sm">
				<div className="modal-header">
					<span className="close" onClick={props.closeModal}>
						&#9587;
					</span>
				</div>
				<div className="modal-body">{props.children}</div>
			</div>
		</div>
	);
	if (!props.isOpen) {
		modal = null;
	}
	return <div>{modal}</div>;
};

export default Modal;
