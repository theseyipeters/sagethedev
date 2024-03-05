import React from "react";
import logo from "../../assets/SagetheDev.svg";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<section
			id="footer"
			className="pt-[50px] bg-[#000000] font-grotta">
			<div className="flex flex-col gap-y-[60px]">
				<div className="flex items-center justify-between px-[30px] lg:px-[100px] md:px-[50px]">
					<img
						src={logo}
						alt="full-logo"
						className="lg:w-[200px] md:w-[200px] w-[100px]"
					/>
					<button className="flex px-[40px] py-[12px] rounded-full border border-green text-green">
						Get in touch
					</button>
				</div>
				<hr className="border-[#1B1B1E]" />
			</div>
			<div className="py-[40px]">
				<p className="text-green text-center font-light">
					© {currentYear}. Oluwaseyi Peters. All rights reserved
				</p>
			</div>
		</section>
	);
};

export default Footer;
