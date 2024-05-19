import React from "react";
import ContactHero from "./ContactHero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Contact({ isDarkMode }) {
	return (
		<div className="bg-lightblue h-fit min-h-screen dark:bg-blue relative w-full overflow-hidden">
			<div className="bg-radial2 dark:bg-radial">
				<div
					className={`h-full ${
						isDarkMode ? "hero" : "hero2"
					}  w-full mb-10 flex items-center justify-center`}>
					<div className="w-full pt-[100px]">
						<ContactHero isDarkMode={isDarkMode} />
					</div>
				</div>
			</div>
		</div>
	);
}
