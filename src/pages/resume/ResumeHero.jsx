import React from "react";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";
import ContactMe from "../contact/ContactMe";

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

				{/* <div className="font-grotta font-light flex gap-3">
					<button className="underline underline-offset-4">share</button>
					<button className="underline underline-offset-4">download</button>
				</div> */}
			</div>
			<main className="w-full pt-10 lg:pt-20 font-grotta">
				<div className="flex flex-col md:flex-row lg:flex-row gap-y-2 w-full border-t border-green-2/20 dark:border-green-1 py-10 lg:py-20 px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
					<div className="w-full md:w-[400px] lg:w-[400px] xl:w-[600px]">
						<h1 className="text-[20px] lg:text-2xl text-green-2 dark:text-green-1 font-medium">
							Brief Bio
						</h1>
					</div>
					<div className="w-full">
						<p>
							I am a versatile Frontend Developer with a foundation in
							Electrical Engineering from the University of Ilorin. My
							multifaceted career spans roles as a community manager, technical
							product manager, and social media manager, equipping me with a
							unique perspective on technology and user engagement.
							<br />
							<br />
							Known for my innovative mindset and collaborative spirit, I thrive
							on blending technical prowess with user-focused design to deliver
							impactful and memorable results. My diverse background enables me
							to approach challenges creatively and strategically, always aiming
							to exceed expectations in the digital landscape.
							<br />
							<br />
							Beyond my technical skills, I am passionate about fostering
							creativity and innovation within teams. I organize design thinking
							workshops, ideation sessions, and product strategy programs,
							guiding startups and enterprises through the complexities of
							modern technology.
						</p>
					</div>
				</div>

				<div className="flex flex-col md:flex-row lg:flex-row gap-y-2 w-full border-t border-green-2/20 dark:border-green-1 py-10 lg:py-20 px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
					<div className="w-full md:w-[400px] lg:w-[400px] xl:w-[600px]">
						<h1 className="text-[20px] lg:text-2xl text-green-2 dark:text-green-1 font-medium">
							Experience
						</h1>
					</div>
					<div className="w-full">
						<p>
							I have worked with companies like Crafter, Scrum Master Africa,
							OnePipe, Genesys, and Nerdzfactory, holding a degree in Electrical
							and Electronics and gaining 3 years of experience in frontend
							engineering. My career in technology has involved diverse roles in
							development, consulting, and strategy, with a focus on creating
							impactful user experiences.
							<br />
							<br />
							I specialize in organizing design thinking sessions, ideation
							workshops, problem framing exercises, and product strategy
							programs. My goal is to help startups and enterprise clients
							navigate the unique challenges of today’s digital landscape
							through interactive workshops, facilitation, and advisory
							sessions.
							<br />
							<br />
							Throughout my journey, I have worn multiple hats—from being an
							individual contributor and leading development teams to
							collaborating closely with stakeholders, designers, and
							developers. I am passionate about driving innovation and fostering
							collaboration to deliver exceptional digital products.
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row lg:flex-row gap-y-2 w-full border-t border-green-2/20 dark:border-green-1 py-10 lg:py-20 px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
					<div className="w-full md:w-[400px] lg:w-[400px] xl:w-[600px]">
						<h1 className="text-[20px] lg:text-2xl text-green-2 dark:text-green-1 font-medium">
							Skills
						</h1>
					</div>
					<div className="flex flex-wrap gap-4 w-full">
						{skillsArray.map((skill, index) => (
							<span
								key={index}
								className="py-2 px-4 rounded-full bg-green-1 dark:bg-slate-700 text-blue dark:text-white">
								{skill}
							</span>
						))}
					</div>
				</div>

				<div className="flex flex-col md:flex-row lg:flex-row gap-y-2 w-full border-t border-green-2/20 dark:border-green-1 py-10 lg:py-20 px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
					<div className="w-full md:w-[400px] lg:w-[400px] xl:w-[600px]">
						<h1 className="text-[20px] lg:text-2xl text-green-2 dark:text-green-1 font-medium">
							Roles
						</h1>
					</div>
					<div className="w-full text-left">
						<p>Software Engineer</p>
						<p>Technical Product Manager</p>
						<p>Frontend Engineer</p>
					</div>
				</div>
				{/* <CTA isDarkMode={isDarkMode} /> */}
			</main>
			<div className="px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
				<ContactMe />
			</div>
		</section>
	);
}
