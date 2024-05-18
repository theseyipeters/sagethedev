import React from "react";
import { Link } from "react-router-dom";

const CTA = ({ isDarkMode }) => {
	return (
		<section
			className={`hero ${
				isDarkMode ? "radial" : "radial2"
			} px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px] py-[150px] `}>
			<div className="flex flex-col gap-y-[20px] text-center font-grotta text-blue dark:text-white font-light w-full lg:w-[720px] items-center justify-center mx-auto">
				<h1 className="text-green-2 dark:text-green-1 text-[50px] leading-[40px] font-medium">
					Reach out
				</h1>
				<p className="text-[18px] md:text-[20px] lg:text-[22px]">
					Let's shape innovative strategies, foster creativity, and elevate your
					projects through collaborative facilitation
				</p>
				<div className="flex justify-center text-green-2 dark:text-green-1 gap-x-[15px]">
					<Link
						to={"/contact"}
						className="bg-green-2 dark:bg-green-1 px-[40px] py-[12px] rounded-full text-white dark:text-[#262626] flex items-center gap-x-[5px]">
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
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CTA;
