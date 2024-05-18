import React from "react";
import ResumeHero from "./ResumeHero";
import Footer from "../components/Footer";

export default function Resume({ isDarkMode }) {
	return (
		<div className="bg-lightblue dark:bg-blue relative w-full overflow-hidden">
			<div className="bg-radial2 dark:bg-radial">
				<div
					className={`h-fit ${
						isDarkMode ? "hero" : "hero2"
					}  w-full flex items-center justify-center`}>
					<div className="w-full pt-[100px]">
						<ResumeHero isDarkMode={isDarkMode} />
					</div>
				</div>
				<Footer isDarkMode={isDarkMode} />
			</div>
		</div>
	);
}
