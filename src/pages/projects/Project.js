import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Project({
	projectTitle,
	projectDescription,
	toolsArray,
	imgSrc,
	link,
	isDarkMode,
}) {
	const [isHovered, setIsHovered] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const img = new Image();
		img.src = imgSrc;
		img.onload = () => setIsLoading(false);
	}, [imgSrc]);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="relative w-full lg:w-[600px] h-[400px] lg:h-[600px] font-grotta rounded-xl">
			{isLoading ? (
				<div
					className={`loader h-[400px] ${
						isDarkMode ? "text-white" : "text-blue"
					} flex justify-center items-center bg-transparent rounded-xl`}>
					<div
						className={`spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full`}></div>
				</div>
			) : (
				<img
					loading="lazy"
					className="object-cover h-full w-full rounded-xl"
					src={imgSrc}
					alt={imgSrc}
					border="0"
					effect="blur"
				/>
			)}

			{isHovered && !isLoading && (
				<div className="absolute bottom-0 h-full w-full px-5 py-5 rounded-xl bg-blue/90">
					<div className="flex flex-col gap-2 absolute bottom-0 p-3 md:p-5 lg:px-5 lg:pt-5 lg:pb-10">
						<Link
							to={link}
							target="_blank"
							className="text-xl md:text-2xl lg:text-3xl font-bold hover:underline hover:underline-offset-4">
							{projectTitle}
						</Link>
						<p className="text-[10px] md:text-xs lg:text-base w-[90%]">
							{projectDescription}
						</p>
						<div className="my-2 flex flex-row gap-3 flex-wrap">
							{toolsArray.map((tool, index) => (
								<span
									className="px-2 md:px-3 lg:px-3 py-1 text-[8px] md:text-xs lg:text-xs lg:font-bold rounded-full bg-gray-600"
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
