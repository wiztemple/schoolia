import React from 'react';

// components
import Input from '../Input';

const Search = () => {
	return (
		<section>
			<div className="container">
				<div className="columns pt-60">
					<div className="col-2" />
					<div className="col-8">
						<h1 className="h4 text-center pb-15 grey-7">
							Search for schools, get more details about all tertiary institutions in Nigeria
						</h1>
						<div className="flex-start">
							<div className="w-100">
								<div className="navbar-form">
									<form>
										<div className="has-icon">
											<Input
												className="search-bar"
												type="text"
												placeholder="Search for schools"
											/>
											<div className="icon-left">
												<svg
													width="20"
													height="20"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
														stroke="#777777"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
													<path
														d="M19 19L14.65 14.65"
														stroke="#777777"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											</div>
										</div>
									</form>
									<div className="flex-start align-center">
										<div>
											<button className="button button-rounded shadow button-default filter mt-20">
												<svg
													width="20"
													height="13"
													viewBox="0 0 20 13"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M7.77778 12.5H12.2222V10.5H7.77778V12.5ZM0 0.5V2.5H20V0.5H0ZM3.33333 7.5H16.6667V5.5H3.33333V7.5Z"
														fill="#5FC487"
													/>
												</svg>{' '}
												Filters
											</button>
										</div>
										<div className="filterparams w-100">
											<div className="columns mt-20">
												<div className="col-6">
													<div className="flames-select has-icon">
														<Input
															className="input-field input-sm"
															type="text"
															placeholder="e.g Universities"
														/>
														<div className="icon-right">
															<svg
																width="14"
																height="8"
																viewBox="0 0 14 8"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M1 1L7 7L13 1"
																	stroke="#777777"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																/>
															</svg>
														</div>
														<ul className="select-item">
															<li className="item">Universities</li>
															<li className="item">Polytechnics</li>
															<li className="item">Colleges of Education</li>
															<li className="item">Monotechnics</li>
															<li className="item">Others</li>
														</ul>
													</div>
												</div>
												<div className="col-6">
													<div className="flames-select has-icon w-100">
														<Input
															className="input-sm"
															type="text"
															placeholder="e.g Federal"
														/>
														<div className="icon-right">
															<svg
																width="14"
																height="8"
																viewBox="0 0 14 8"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M1 1L7 7L13 1"
																	stroke="#777777"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																/>
															</svg>
														</div>
														<ul className="select-item">
															<li className="item">Federal</li>
															<li className="item">State</li>
															<li className="item">Private</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="ml-10">
								<button className="button button-green button-rounded shadow w-160">Search</button>
							</div>
						</div>
					</div>
					<div className="col-2" />
				</div>
			</div>
		</section>
	);
};

export default Search;
