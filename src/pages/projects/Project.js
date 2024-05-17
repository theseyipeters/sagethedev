import React, { useState, useEffect } from "react";

export default function Project({
	projectTitle,
	projectDescription,
	toolsArray,
	imgSrc,
}) {
	const [isHovered, setIsHovered] = useState(false);

	// const toolsArray = ["React", "Typescript", "Nextjs"];
	return (
		<div
			onMouseEnter={() => {
				setIsHovered(true);
			}}
			onMouseLeave={() => {
				setIsHovered(false);
			}}
			className={`relative w-[600px] h-fit font-grotta rounded-xl`}>
			<img
				className="w-full h-full object-cover rounded-xl"
				src={imgSrc}
			/>

			{isHovered && (
				<div
					className={`absolute bottom-0 h-full w-full px-5 py-5 rounded-xl  ${
						isHovered ? "bg-blue/80" : ""
					}`}>
					<div className="flex flex-col gap-2 absolute bottom-0 px-5 py-5">
						<h2 className="text-3xl font-bold">{projectTitle}</h2>

						<p className="text-sm">{projectDescription}</p>

						<div className="my-2 flex flex-row gap-3 flex-wrap">
							{toolsArray.map((tool, index) => (
								<span
									className="px-3 py-1 text-xs font-bold rounded-full bg-gray-600"
									key={index}>
									{tool}
								</span>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
