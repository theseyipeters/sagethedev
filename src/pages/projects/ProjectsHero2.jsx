import React, { useState, useEffect } from "react";
import ContactMe from "../contact/ContactMe";
import ProjectItem from "./ProjectItem/ProjectItem";
import { motion } from "framer-motion";
import { projects2 } from "./data";
import Github from "../../svgs/Github";
import Instagram from "../../svgs/Instagram";
import Medium from "../../svgs/Medium";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import X from "../../svgs/X";

export default function ProjectsHero2({ isDarkMode }) {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [currentProject, setCurrentProject] = useState(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const heroSection = document.getElementById("hero");
			const rect = heroSection.getBoundingClientRect();
			const inView = rect.top < window.innerHeight && rect.bottom >= 0;
			setIsInView(inView);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial check

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{hoveredIndex !== null && (
				<div className="absolute inset-0 bg-radial2 dark:bg-radial opacity-100 transition-all duration-500 z-20"></div>
			)}
			<section className="w-full flex flex-col pt-[50px] text-blue dark:text-white gap-y-[20px] px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
				<main
					id="hero"
					className="w-full text-white items-center justify-center flex mt-2 lg:mt-[50px] relative">
					<div className="relative flex flex-col gap-10 w-full mx-auto items-center justify-center z-20">
						{projects2.map((project, index) => (
							<div
								className="w-full"
								onClick={() => {
									setCurrentProject(projects2[hoveredIndex]);
									setCurrentProject(projects2[index]);
									setHoveredIndex(null);
								}}
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
								key={index}>
								<ProjectItem
									index={index + 1}
									{...project}
									isHovered={hoveredIndex === index}
								/>
							</div>
						))}
						{hoveredIndex !== null && isInView && (
							<>
								{projects2[hoveredIndex].imgSrc2.map((imgObj, i) => (
									<motion.div
										initial={{ scale: 0.7, opacity: 0 }}
										animate={{ scale: 1.1, opacity: 1 }}
										exit={{ scale: 0, opacity: 0 }}
										transition={{ duration: 1 }}
										key={i}
										className="absolute rounded-xl p-5 hidden lg:block"
										style={{
											top: imgObj.position.top,
											left: imgObj.position.left,
											backgroundColor: projects2[hoveredIndex].bg,
										}}>
										<div className="w-[280px] h-[180px]">
											<img
												src={imgObj.img}
												alt={`Project ${projects2[hoveredIndex].projectTitle} ${
													i + 1
												}`}
												className="w-full h-full object-cover rounded-xl"
											/>
										</div>
									</motion.div>
								))}
							</>
						)}
					</div>
				</main>

				<ContactMe />
			</section>

			{currentProject && (
				<motion.div
					initial={{ opacity: 1, y: "100vh" }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: "100vh" }}
					transition={{ duration: 1.5 }}
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
					<div className="bg-black h-full lg:h-screen z-50 pt-[100px] ">
						<div className="absolute top-10 right-10 text-blue">
							<button
								className="w-8"
								onClick={() => setCurrentProject(null)}>
								<svg
									width="100%"
									height="100%"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4.26732 12.6667L3.33398 11.7333L7.06732 8.00001L3.33398 4.26668L4.26732 3.33334L8.00065 7.06668L11.734 3.33334L12.6673 4.26668L8.93398 8.00001L12.6673 11.7333L11.734 12.6667L8.00065 8.93334L4.26732 12.6667Z"
										fill="white"
									/>
								</svg>
							</button>
						</div>

						<div className="bg-black fixed gap-y-[15px] bottom-[2%] lg:bottom-[5%] left-1/2 -translate-x-1/2 rounded-full">
							<div
								className={`flex w-[250px] flex-row justify-between  text-white rounded-full p-[10px] md:p-[15px] lg:px-[25px]  text-right z-40`}>
								<Link
									data-tooltip-id="github"
									className="w-[25px] md:w-[35px] lg:w-[35px]"
									to={"https://github.com/theseyipeters"}
									target="_blank">
									<Github />
									<Tooltip
										id="github"
										place="top"
										effect="solid"
										backgroundColor="black"
										textColor="white"
										arrowColor="black">
										Github
									</Tooltip>
								</Link>
								<Link
									data-tooltip-id="instagram"
									to={"https://www.instagram.com/sagethedev.io/"}
									target="_blank"
									className="w-[25px] md:w-[35px] lg:w-[35px]">
									<Instagram />
									<Tooltip
										id="instagram"
										place="top"
										effect="solid"
										backgroundColor="black"
										textColor="white"
										arrowColor="black">
										Instagram
									</Tooltip>
								</Link>
								<Link
									data-tooltip-id="x"
									to={"https://www.instagram.com/sagethedev.io/"}
									target="_blank"
									className="w-[25px] md:w-[35px] lg:w-[27px]">
									<X />
									<Tooltip
										id="x"
										place="top"
										effect="solid"
										backgroundColor="black"
										textColor="white"
										arrowColor="black">
										X
									</Tooltip>
								</Link>
								<Link
									to={"https://medium.com/@theseyipeters"}
									target="_blank"
									className="w-[25px] md:w-[35px] lg:w-[35px]">
									<div data-tooltip-id="medium">
										<Medium />
									</div>
									<Tooltip
										id="medium"
										place="top"
										effect="solid"
										backgroundColor="black"
										textColor="white"
										arrowColor="black">
										Medium
									</Tooltip>
								</Link>
							</div>
						</div>
						<div className="absolute top-[100px] left-0 flex flex-col gap-[10px] w-full overflow-auto">
							<div className="flex w-fit gap-5">
								{currentProject.imgSrc2.map((imgObj, i) => (
									<div
										key={i}
										className="w-[320px] lg:w-[480px] h-[213px] lg:h-[320px] p-5 rounded-xl"
										style={{
											backgroundColor: currentProject.bg,
										}}>
										<img
											src={imgObj.img}
											alt={`Project ${currentProject.projectTitle} ${i + 1}`}
											className="w-full h-full object-cover rounded-xl"
										/>
									</div>
								))}
							</div>
						</div>
						<div className="flex flex-col text-white px-4 md:px-8 lg:px-[200px] mt-[250px] md:mt-[250px] lg:mt-[350px] pb-[150px] w-full overflow-auto h-[400px] lg:h-[450px]">
							<div className="flex justify-between items-center w-full">
								<div className="flex flex-col gap-4">
									<span className="text-white font-mono text-[10px] mb-2 lg:mb-4">
										PROJECT/0{currentProject.id}.
									</span>
									<span className="mb-2 lg:mb-4 font-vogalis uppercase text-[50px] md:text-[50px] lg:text-[60px] leading-[45px]">
										{currentProject.projectTitle}.
									</span>
								</div>

								<div className="hidden lg:block">
									<a
										href={currentProject.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-black bg-[#fff] px-8 py-3">
										View Project
									</a>
								</div>
							</div>

							<p className="my-2 lg:my-4 w-full lg:w-2/3 text-sm md:text-base">
								{currentProject.projectDescription}
							</p>

							{currentProject.features && (
								<div className="flex flex-col gap-2">
									<span className="text-white  text-[12px]">Features</span>
									<ul className="flex flex-col gap-1 list-none list-inside">
										{currentProject.features.map((feature, index) => (
											<li
												className="text-white text-[14px] list-item"
												key={index}>
												<span className="mx-1">-</span>
												{feature}
											</li>
										))}
									</ul>
								</div>
							)}

							<div className="flex flex-col gap-2 w-full mt-4">
								<span className="text-white  text-[12px]">Tools Used</span>
								<div className="flex gap-4">
									{currentProject.toolsArray.map((tool, index) => (
										<span
											className="text-white font-mono text-[10px] uppercase"
											key={index}>
											{tool}
										</span>
									))}
								</div>
							</div>

							<div className="block mt-10 lg:hidden">
								<a
									href={currentProject.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-black bg-[#fff] px-8 py-3">
									View Project
								</a>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
}
