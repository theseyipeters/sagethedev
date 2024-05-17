import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsHero from "./ProjectsHero";

export default function Projects() {
	return (
		<div className="bg-blue relative w-full overflow-hidden">
			<div className="radial">
				<div className="h-fit mb-10 hero  w-full flex">
					<div className="fixed top-0 w-full z-50">
						<Navbar />
					</div>
					<div className="w-full pt-[100px]">
						<ProjectsHero />
					</div>
				</div>
			</div>
		</div>
	);
}
