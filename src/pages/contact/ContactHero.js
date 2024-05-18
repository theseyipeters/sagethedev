import React from "react";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import { Link } from "react-router-dom";

export default function ContactHero({ isDarkMode }) {
	return (
		<section
			id="hero"
			// ref={ref}
			className="w-full flex  flex-col pt-[50px] text-blue dark:text-white gap-y-[20px] px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
			<div className="w-full flex items-center justify-between">
				<h1 className="text-4xl font-bold text-left">Contact me.</h1>
			</div>

			<main className="w-full text-white flex font-grotta mt-[50px]">
				<form className="w-3/5 flex flex-col gap-3 items-center justify-start">
					<InputField
						isRequired={true}
						type={"text"}
						label={"Full Name"}
						placeholder={"Enter your full name"}
					/>
					<InputField
						isRequired={true}
						type={"email"}
						label={"Email"}
						placeholder={"Enter your email address"}
					/>
					<TextArea
						isRequired={true}
						type={"text"}
						label={"Message"}
						placeholder={"Leave a message"}
					/>

					<div className="w-2/5 mt-4 flex items-start justify-end ml-auto ">
						<button className="w-full text-center bg-green-2 dark:bg-green-1 px-[40px] py-[12px] rounded-md text-white dark:text-[#262626] gap-x-[5px]">
							Submit
						</button>
					</div>
				</form>
			</main>
		</section>
	);
}
