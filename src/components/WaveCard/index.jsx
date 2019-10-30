import React from 'react';

// image
import schoolimage from '../../assets/images/school3.jpg';

const WaveCard = () => {
	return (
		<div className="col-4">
			<div className="wavecard">
				<img className="wavecard-image" src={schoolimage} alt="landscape" />
				<div className="wavecard-content">
					<span className="card-title">Federal University Of Technology Owerri(FUTO)</span>
					<div className="wavecard-body">
						<div className="rectcard-desc">
							...<a href="details.html">View Full details</a>
						</div>
						<div className="flex-start">
							<span className="property-key">Location:</span>
							<span className="property-name">Owerri, Imo State</span>
						</div>
						<div className="flex-start pb-20">
							<span className="property-key">Website:</span>
							<span className="property-name">www.futo.edu.ng</span>
						</div>
					</div>
				</div>
				<div className="wavecard-footer">
					<div className="flex-start">
						<div className="reaction">
							<div className="reaction-icon">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
										stroke="#C4C4C4"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<div className="reaction-count">55</div>
						</div>
						<div className="reaction ml-20">
							<div className="reaction-icon">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7117 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92176 4.44061 8.37485 5.27072 7.03255C6.10083 5.69025 7.28825 4.60557 8.7 3.9C9.87812 3.30493 11.1801 2.99656 12.5 3H13C15.0843 3.11499 17.053 3.99476 18.5291 5.47086C20.0052 6.94695 20.885 8.91565 21 11V11.5Z"
										stroke="#c4c4c4"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>

							<div className="reaction-count">45</div>
						</div>
						<div className="reaction ml-20">
							<div className="reaction-icon">
								<svg
									width="24"
									height="18"
									viewBox="0 0 24 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z"
										stroke="#c4c4c4"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
										stroke="#c4c4c4"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<div className="reaction-count">90</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WaveCard;
