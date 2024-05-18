import React from "react";
import ContactHero from "./ContactHero";
import Footer from "../components/Footer";

export default function Contact({ isDarkMode }) {
	return (
		<div className="bg-lightblue h-screen dark:bg-blue relative w-full overflow-hidden">
			<div className="bg-radial2 dark:bg-radial">
				<div
					className={`h-full ${
						isDarkMode ? "hero" : "hero2"
					}  w-full mb-10 flex items-center justify-center`}>
					<div className="w-full pt-[100px]">
						<ContactHero isDarkMode={isDarkMode} />
					</div>
				</div>
				{/* <Footer isDarkMode={isDarkMode} /> */}
			</div>
		</div>
	);
}
