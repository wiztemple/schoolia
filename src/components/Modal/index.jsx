import React, { Component } from 'react';

// styles
import './Modal.scss';

class Modal extends Component {
	render() {
		let modal = (
			<div className="modal">
				<div className="modal-content modal-content-sm">
					<div className="modal-header">
						<span className="close" onClick={this.props.closeModal}>
							&#9587;
						</span>
					</div>
					<div className="modal-body">{this.props.children}</div>
				</div>
			</div>
		);
		if (!this.props.isOpen) {
			modal = null;
		}
		return <div>{modal}</div>;
	}
}

export default Modal;
