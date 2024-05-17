import React from "react";
import chatbox from "../../assets/chatbox1.svg";
import chatbox2 from "../../assets/chatbox2.svg";
import chatbox3 from "../../assets/chatbox3.svg";
import chatbox4 from "../../assets/chatbox4.svg";
import eli from "../../assets/eli.svg";

const Opinion = ({
	firstName,
	lastName,
	position,
	company,
	comment,
	profileImg,
	isClient,
	isDarkMode,
}) => {
	return (
		<div
			className={`px-[100px] flex flex-row ${
				isClient ? "flex-row-reverse" : ""
			} justify-center items-end`}>
			<div className={`flex`}>
				{isDarkMode ? (
					<img
						src={isClient ? chatbox : chatbox2}
						alt=""
					/>
				) : (
					<img
						src={isClient ? chatbox4 : chatbox3}
						alt=""
					/>
				)}

				<div
					className={`flex flex-col gap-y-[15px] mt-[50px]  ${
						isClient ? "ml-[-520px]" : "ml-[-540px]"
					} w-[500px] text-green-2 dark:text-white font-grotta font-light text-[18px]`}>
					<p className="italic font-extralight">"{comment}"</p>
					<div>
						<h1 className="text-green-2 dark:text-green-1">
							{firstName}{" "}
							<span className="capitalize font-medium">{lastName}</span>
						</h1>
						<p className="text-[16px]">
							{position}, <span className="font-medium">{company}</span>
						</p>
					</div>
				</div>
			</div>
			<img
				src={profileImg}
				alt="profileImg"
			/>
		</div>
	);
};

export default Opinion;
