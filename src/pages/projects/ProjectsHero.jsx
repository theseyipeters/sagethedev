import React, { useRef } from "react";
import Project from "./Project";

export default function ProjectsHero() {
	return (
		<section
			id="hero"
			// ref={ref}
			className="w-full flex flex-col pt-[50px] text-white gap-y-[20px] px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
			<div className="w-full flex items-center justify-between">
				<h1 className="text-4xl font-bold text-left">Projects.</h1>

				<div className="filter flex flex-row gap-1 font-light text-sm">
					<div className="filter__item cursor-pointer px-3 py-1 hover:bg-green rounded-md hover:text-blue w-fit">
						All
					</div>
					<div className="filter__item cursor-pointer px-3 py-1 hover:bg-green rounded-md hover:text-blue w-fit">
						Websites
					</div>
					<div className="filter__item cursor-pointer px-3 py-1 hover:bg-green rounded-md hover:text-blue w-fit">
						Applications
					</div>
					<div className="filter__item cursor-pointer px-3 py-1 hover:bg-green rounded-md hover:text-blue w-fit">
						Designs
					</div>
				</div>
			</div>

			<main className="w-full items-center justify-center flex mt-[50px]">
				<div className="flex gap-6 flex-wrap">
					<Project
						projectTitle={"Crafter AI"}
						projectDescription={
							"Crafter AI is a project management tool similar to Jira, enhanced with AI capabilities to aid teams in organizing, tracking, and managing their work more efficiently."
						}
						imgSrc={
							"https://i.ibb.co/Np51sXd/copy-7680-EC6-F-6951-41-C4-897-C-36-DFABB5-D900.gif"
						}
						toolsArray={["React", "Zustand", "Nextjs", "Stripe API"]}
					/>
					<Project
						projectTitle={`TxE Summit 2023`}
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
						projectDescription={
							"Vitals provides users with a system that helps manage medical records and automate clinical workflow with optimal security measures."
						}
						imgSrc={"https://i.ibb.co/rdK15fH/vitals.gif"}
						toolsArray={["React", "Redux", "EtherJS"]}
					/>
				</div>
			</main>
		</section>
	);
}
