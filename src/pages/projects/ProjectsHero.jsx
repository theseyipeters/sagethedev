import React, { useRef } from "react";
import Project from "./Project";
import ContactMe from "../contact/ContactMe";

export default function ProjectsHero({ isDarkMode }) {
	return (
		<section
			id="hero"
			// ref={ref}
			className="w-full flex  flex-col pt-[50px] text-blue dark:text-white gap-y-[20px] px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
			<div className="w-full flex flex-col gap-[20px] md:flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between">
				<h1 className="text-4xl font-bold text-left">Projects.</h1>

				<div className="filter font-grotta flex flex-row gap-1 font-light text-sm">
					<div className="filter__item cursor-pointer px-3 py-1 hover:bg-blue dark:hover:bg-green-1 rounded-md hover:text-white dark:hover:text-blue w-fit">
						All
					</div>
					<div className="filter__item cursor-pointer px-3 py-1 hover:bg-blue dark:hover:bg-green-1 rounded-md hover:text-white dark:hover:text-blue w-fit">
						Websites
					</div>
					<div className="filter__item cursor-pointer px-3 py-1 hover:bg-blue dark:hover:bg-green-1 rounded-md hover:text-white dark:hover:text-blue w-fit">
						Applications
					</div>
					<div className="filter__item cursor-pointer px-3 py-1 hover:bg-blue dark:hover:bg-green-1 rounded-md hover:text-white dark:hover:text-blue w-fit">
						Designs
					</div>
				</div>
			</div>

			<main className="w-full text-white items-center justify-center flex mt-2 lg:mt-[50px]">
				<div className="flex gap-6 flex-wrap">
					<Project
						projectTitle={"Common"}
						projectDescription={
							"Common is a versatile JavaScript-based tool designed to effortlessly create stunning color gradients and palettes. It provides designers and developers with an intuitive interface to generate harmonious color schemes for their projects, enhancing creativity and efficiency in the design process."
						}
						link={"https://usecommon.vercel.app"}
						imgSrc={
							"https://i.ibb.co/D1bG8Zy/copy-70-F90528-4-B4-E-4844-B3-AA-9-DD8-AF76231-A.gif"
						}
						toolsArray={["React", "Tailwind", "Nextjs", "Context"]}
					/>
					<Project
						projectTitle={"Crafter AI"}
						projectDescription={
							"Crafter AI is a project management tool similar to Jira, enhanced with AI capabilities to aid teams in organizing, tracking, and managing their work more efficiently."
						}
						link={"https://usecrafter.com"}
						imgSrc={
							"https://drive.google.com/file/d/1V6tk4U83Vi1YF7EubzsuWA5PcTItemr9/view?usp=sharing"
						}
						toolsArray={["React", "Zustand", "Nextjs", "Stripe API"]}
					/>
					<Project
						projectTitle={`TxE Summit 2023`}
						link={"https://enugutechsummit.com"}
						projectDescription={
							" Enugu TxE aims to ignite innovation, foster collaboration, and empower the local entrepreneurial community."
						}
						toolsArray={["React", "SwiperJS", "QRCodeJS"]}
						imgSrc={
							"https://i.ibb.co/3Sg91hH/copy-DA849-B43-E086-49-C4-A9-B3-275-D92-FFF879.gif"
						}
					/>

					<Project
						projectTitle={"Vitals"}
						link={"https://vitalz.vercel.app"}
						projectDescription={
							"Vitals provides users with a system that helps manage medical records and automate clinical workflow with optimal security measures."
						}
						imgSrc={"https://i.ibb.co/rdK15fH/vitals.gif"}
						toolsArray={["React", "Redux", "EtherJS"]}
					/>
				</div>
			</main>

			<ContactMe />
		</section>
	);
}
