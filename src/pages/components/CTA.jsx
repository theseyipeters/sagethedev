import React from "react";

const CTA = () => {
	return (
		<section className="hero radial px-[100px] py-[150px]">
			<div className="flex flex-col gap-y-[20px] text-center font-grotta text-white font-light w-[720px] items-center justify-center mx-auto">
				<h1 className="text-green text-[50px] leading-[40px] font-medium">
					Reach out
				</h1>
				<p className="text-[22px]">
					Let's shape innovative strategies, foster creativity, and elevate your
					projects through collaborative facilitation
				</p>
				<div className="flex justify-center text-green gap-x-[15px]">
					<button className="bg-green px-[40px] py-[12px] rounded-full text-[#262626] flex items-center gap-x-[5px]">
						<svg
							width="21"
							height="20"
							viewBox="0 0 21 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M17.0625 3.75H3.9375C3.07456 3.75 2.375 4.44956 2.375 5.3125V14.6875C2.375 15.5504 3.07456 16.25 3.9375 16.25H17.0625C17.9254 16.25 18.625 15.5504 18.625 14.6875V5.3125C18.625 4.44956 17.9254 3.75 17.0625 3.75Z"
								stroke="currentColor"
								stroke-width="1.25"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M4.875 6.25L10.5 10.625L16.125 6.25"
								stroke="currentColor"
								stroke-width="1.25"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Send a mail
					</button>
					<button className="text-green border border-green px-[40px] py-[12px] rounded-full flex items-center gap-x-[5px]">
						<svg
							width="25"
							height="26"
							viewBox="0 0 25 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<circle
								cx="12.25"
								cy="12.75"
								r="11.6375"
								stroke="#93B1A6"
								stroke-width="1.225"
							/>
							<g clip-path="url(#clip0_1846_1280)">
								<path
									d="M8.85137 9.44092H6.39216C6.28302 9.44092 6.19458 9.52939 6.19458 9.6385V17.5389C6.19458 17.648 6.28302 17.7365 6.39216 17.7365H8.85137C8.96051 17.7365 9.04895 17.648 9.04895 17.5389V9.6385C9.04895 9.52939 8.96051 9.44092 8.85137 9.44092Z"
									fill="#93B1A6"
								/>
								<path
									d="M7.62277 5.51343C6.72797 5.51343 6 6.2406 6 7.13442C6 8.02863 6.72797 8.75608 7.62277 8.75608C8.51686 8.75608 9.24423 8.02859 9.24423 7.13442C9.24427 6.2406 8.51686 5.51343 7.62277 5.51343Z"
									fill="#93B1A6"
								/>
								<path
									d="M15.1068 9.24463C14.1191 9.24463 13.3889 9.66923 12.9461 10.1517V9.63857C12.9461 9.52946 12.8576 9.44098 12.7485 9.44098H10.3934C10.2842 9.44098 10.1958 9.52946 10.1958 9.63857V17.5389C10.1958 17.6481 10.2842 17.7365 10.3934 17.7365H12.8472C12.9564 17.7365 13.0448 17.6481 13.0448 17.5389V13.6301C13.0448 12.3129 13.4026 11.7997 14.3208 11.7997C15.3208 11.7997 15.4002 12.6224 15.4002 13.6979V17.539C15.4002 17.6481 15.4887 17.7366 15.5978 17.7366H18.0526C18.1617 17.7366 18.2501 17.6481 18.2501 17.539V13.2055C18.2501 11.2469 17.8767 9.24463 15.1068 9.24463Z"
									fill="#93B1A6"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1846_1280">
									<rect
										width="12.25"
										height="12.25"
										fill="white"
										transform="translate(6 5.5)"
									/>
								</clipPath>
							</defs>
						</svg>
						LinkedIn
					</button>
				</div>
			</div>
		</section>
	);
};

export default CTA;
