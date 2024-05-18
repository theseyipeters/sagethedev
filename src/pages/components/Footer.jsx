import React from "react";
import logo from "../../assets/SagetheDev.svg";
import logo2 from "../../assets/SagetheDev2.svg";

const Footer = ({ isDarkMode }) => {
	const currentYear = new Date().getFullYear();

	return (
		<section
			id="footer"
			className="pt-[50px] bg-[white] dark:bg-[#000000] font-grotta">
			<div className="flex flex-col gap-y-[60px]">
				<div className="flex items-center justify-between px-[30px] lg:px-[100px] md:px-[50px]">
					{isDarkMode ? (
						<img
							src={logo}
							alt="full-logo"
							className="lg:w-[200px] md:w-[200px] w-[100px]"
						/>
					) : (
						<img
							src={logo2}
							alt="full-logo"
							className="lg:w-[200px] md:w-[200px] w-[100px]"
						/>
					)}
					<button className="flex px-[40px] py-[8px] rounded-full border border-green-2 dark:border-green-1 text-green-2 dark:text-green-1">
						Get in touch
					</button>
				</div>
				<hr className="border-green-1/20 dark:border-[#1B1B1E]" />
			</div>
			<div className="py-[40px]">
				<p className="text-sm md:text-base lg:text-base xl:text-lg text-green-2 dark:text-green-1 text-center font-light">
					© {currentYear}. Oluwaseyi Peters. All rights reserved
				</p>
			</div>
		</section>
	);
};

export default Footer;
