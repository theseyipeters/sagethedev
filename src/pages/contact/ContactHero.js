import React from "react";
import InputField from "../../components/InputField";
import TextArea from "../../components/TextArea";
import { Link } from "react-router-dom";

export default function ContactHero({ isDarkMode }) {
	return (
		<section
			id="hero"
			// ref={ref}
			className="w-full flex  flex-col pt-[20px] md:pt-[50px] lg:pt-[50px] text-blue dark:text-white  px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
			<div className="w-full flex items-center justify-between">
				<h1 className="text-3xl lg:text-4xl font-bold text-left">
					Contact me.
				</h1>
			</div>

			<main className="w-full  flex flex-col font-grotta mt-[20px] md:mt-[40px] lg:mt-[50px]">
				<form className="w-full lg:w-3/5 flex flex-col gap-3 items-center justify-start">
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

					<div className="w-full lg:w-2/5 mt-4 flex items-start justify-end ml-auto ">
						<button className="w-full text-center bg-green-2 dark:bg-green-1 px-[40px] py-[12px] rounded-md text-white dark:text-[#262626] gap-x-[5px]">
							Submit
						</button>
					</div>
				</form>
				<Link
					to={"/"}
					className="flex gap-2 font-grotta py-16">
					<h1 className="underline-thick cursor-pointer ">Back to Home</h1>
					<span>
						<svg
							className="animate-left-right"
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fillRule="evenodd"
							clipRule="evenodd">
							<path
								fill="currentColor"
								d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
						</svg>
					</span>
				</Link>
			</main>
		</section>
	);
}
