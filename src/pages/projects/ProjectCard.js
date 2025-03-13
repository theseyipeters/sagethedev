import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ProjectCard({
	projectTitle,
	projectDescription,
	toolsArray,
	imgSrc,
	link,
	Icon,
	inspired,
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
			// onMouseEnter={() => setIsHovered(true)}
			// onMouseLeave={() => setIsHovered(false)}
			className={` w-full relative flex justify-center items-center rounded-full bg-transparent h-[180px] transition-all duration-500 ${
				isHovered ? "scale-[1.2]" : ""
			}`}>
			<div className="flex justify-center items-center">{Icon}</div>

			{isHovered && (
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					className="absolute top-0 px-6 py-1 rounded-full bg-gray-800  dark:bg-blue">
					<p className="text-center">{projectTitle}</p>
				</motion.div>
			)}
		</div>
	);
}
