import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ProjectItem({
	projectTitle,
	projectDescription,
	toolsArray,
	imgSrc,
	link,
	index,
	inspired,
	isDarkMode,
	isHovered,
}) {
	return (
		<div className="relative w-full lg:w-full xl:max-w-[1400px] h-fit font-grotta cursor-pointer">
			<div className="h-full w-full px-2 md:px-4 lg:px-5">
				<div className="flex flex-col gap-2 p-3 md:p-5 lg:px-5 lg:pt-5 lg:pb-10">
					<div className="flex items-center justify-between gap-2">
						<div className="flex gap-[20px] lg:gap-[100px] ml-0 lg:ml-[100px]">
							<p className="text-blue dark:text-gray-400 font-mono text-[10px] hidden lg:block">
								PROJECT/0{index}.
							</p>
							<div
								className={`text-blue dark:text-gray-300 text-[45px] md:text-[40px] lg:text-[60px] leading-[45px] lg:leading-[60px] font-medium font-vogalis tracking-[2px] uppercase transition-all duration-500  ${
									isHovered
										? "text-blue dark:text-[#fff] scale-[1.12]"
										: "text-blue/60 dark:text-[#fff]"
								}`}>
								{projectTitle} <span className="hidden lg:inline-block">.</span>
							</div>
						</div>

						<div className="flex ml-auto gap-[100px] items-center">
							<div className="my-2 lg:flex flex-row flex-wrap hidden ">
								{toolsArray.map((tool, index) => (
									<span
										className="text-[10px] font-mono rounded-full uppercase text-blue dark:text-gray-400"
										key={index}>
										{tool}
										{index < toolsArray.length - 1 && (
											<span className="mx-1">-</span>
										)}
									</span>
								))}
							</div>

							<span className="text-blue dark:text-gray-400">
								<svg
									className={`${isHovered ? "animate-left-right" : ""}`}
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
						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex items-center">
				<span className="w-[3px] h-[3px] rounded-full bg-blue dark:bg-white/40"></span>
				<span className="w-full h-[1px] rounded-full bg-blue dark:bg-white/40"></span>
				<span className="w-[3px] h-[3px] rounded-full bg-blue dark:bg-white/40"></span>
			</div>
		</div>
	);
}
