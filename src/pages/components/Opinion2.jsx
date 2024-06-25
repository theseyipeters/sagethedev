import React from "react";

export default function Opinion2({
	firstName,
	lastName,
	position,
	company,
	comment,
	profileImg,
	isClient,
	isDarkMode,
}) {
	return (
		<div className="border border-blue dark:border-white w-full flex flex-col h-fit py-12 px-4 rounded-2xl">
			<div
				className={`flex flex-col gap-y-[30px] w-full text-green-2 dark:text-white font-grotta font-light text-[14px]`}>
				<p className="italic font-medium">"{comment}"</p>
				<div className="w-full flex items-center justify-between gap-4">
					<div className="w-4/5">
						<h1 className="text-base text-green-2 dark:text-green-1">
							{firstName}{" "}
							<span className="capitalize font-medium">{lastName}</span>
						</h1>
						<p className="text-[14px]">
							{position}, <span className="font-medium">{company}</span>
						</p>
					</div>
					<div className="w-[50px]">
						<img
							src={profileImg}
							alt="profileImg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
