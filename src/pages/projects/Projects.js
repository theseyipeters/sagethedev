import React from "react";
import ProjectsHero2 from "./ProjectsHero2";
export default function Projects({ isDarkMode }) {
	return (
		<>
			<div className="bg-lightblue dark:bg-blue relative w-full overflow-hidden">
				<div className="bg-radial2 dark:bg-radial">
					<div
						className={`h-fit ${
							isDarkMode ? "hero" : "hero2"
						}  w-full mb-10 flex items-center justify-center`}>
						<div className="w-full pt-[10px]">
							{/* <ProjectsHero isDarkMode={isDarkMode} /> */}
							<ProjectsHero2 isDarkMode={isDarkMode} />
						</div>
					</div>
					{/* <Footer isDarkMode={isDarkMode} /> */}
				</div>
			</div>
		</>
	);
}
