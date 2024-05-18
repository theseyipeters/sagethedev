import React from "react";
import CTA from "../components/CTA";

export default function ResumeHero({ isDarkMode }) {
	const skillsArray = [
		"HTML5",
		"CSS3",
		"Sass/LESS",
		"React.js",
		"Javascript",
		"Typescript",
		"Next.js",
		"Tailwind",
		"Redux",
		"Zustand",
		"GitHub/GitLab/Bitbucket",
		"Docker",
		"Tailwind",
		"RESTful APIs",
		"Webpack",
		"Context API",
		"JSON",
		"UI/UX",
	];
	return (
		<section
			id="hero"
			// ref={ref}
			className="w-full flex  flex-col pt-[50px] text-blue dark:text-white gap-y-[20px] ">
			<div className="w-full flex items-center justify-between px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
				<h1 className="text-4xl font-bold text-left">Résumé.</h1>

				<div className="font-grotta font-light flex gap-3">
					<button className="underline underline-offset-4">share</button>
					<button className="underline underline-offset-4">download</button>
				</div>
			</div>
			<main className="w-full pt-20 font-grotta">
				<div className="flex w-full border-t border-b border-green-2/20 dark:border-green-1 py-20 px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
					<div className="w-4/5">
						<h1 className="text-2xl text-green-2 dark:text-green-1 font-medium">
							Brief Bio
						</h1>
					</div>
					<div>
						<p>
							I started as a Computer Science undergrad at The University of
							Nigeria, and an alumnus of the University of Manchester Business
							School. My early career was spent in Pre-sales, project management
							and technology consulting prior to jumping into the world product
							& Innovation management.
							<br />
							<br />
							I organize design thinking, ideation, problem framing & product
							strategy programs through workshops, facilitation and advisory
							sessions to help startups and enterprise client’s journey through
							the unique realities of our present day.
							<br />
							<br />
							Throughout my career, I've worn multiple hats—serving as an
							individual contributor, steering teams as a line manager,
							navigating boardrooms as a C-suite executive, and orchestrating
							the synergy of teams of talented individuals across the region.
						</p>
					</div>
				</div>

				<div className="flex w-full border-t border-b border-green-2/20 dark:border-green-1 py-20 px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
					<div className="w-4/5">
						<h1 className="text-2xl text-green-2 dark:text-green-1 font-medium">
							Experience
						</h1>
					</div>
					<div>
						<p>
							I have worked for companies like HP, Dimension Data, Microsoft
							with a computer science degree and 15+ years field experience in
							Technology, Strategy, Consulting & Sales, also worked with OEMs,
							Startups, NGOs leading projects and collaborating closely with
							stakeholders, specialists and developers
							<br />
							<br />
							I organize design thinking, ideation, problem framing & product
							strategy programs through workshops, facilitation and advisory
							sessions to help startups and enterprise client’s journey through
							the unique realities of our present day.
							<br />
							<br />
							Throughout my career, I've worn multiple hats—serving as an
							individual contributor, steering teams as a line manager,
							navigating boardrooms as a C-suite executive, and orchestrating
							the synergy of teams of talented individuals across the region.
						</p>
					</div>
				</div>
				<div className="flex w-full border-t border-b border-green-2/20 dark:border-green-1 py-20 px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
					<div className="w-2/5">
						<h1 className="text-2xl text-green-2 dark:text-green-1 font-medium">
							Skills
						</h1>
					</div>
					<div className="flex flex-wrap gap-4 w-full ml-14">
						{skillsArray.map((skill, index) => (
							<span
								key={index}
								className="py-2 px-4 rounded-full bg-green-1 dark:bg-slate-700 text-blue dark:text-white">
								{skill}
							</span>
						))}
					</div>
				</div>

				<div className="flex w-full border-t border-b border-green-2/20 dark:border-green-1 py-20 px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
					<div className="w-2/5">
						<h1 className="text-2xl text-green-2 dark:text-green-1 font-medium">
							Roles
						</h1>
					</div>
					<div className="ml-14 w-full text-left">
						<p>Software Engineer</p>
						<p>Technical Product Manager</p>
						<p>Frontend Engineer</p>
					</div>
				</div>
				<CTA isDarkMode={isDarkMode} />
			</main>
		</section>
	);
}
