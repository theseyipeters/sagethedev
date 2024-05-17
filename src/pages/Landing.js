import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Unfiltered from "./components/Unfiltered";
import Articles from "./components/Articles";
import Playlists from "./components/Playlists";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Github from "../svgs/Github";
import Behance from "../svgs/Behance";
import Dribbble from "../svgs/Dribbble";

const Landing = () => {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<div className="bg-blue relative w-full overflow-hidden">
			<div className="radial">
				<div className="h-screen hero  w-full flex items-center justify-center">
					<div className="fixed top-0 w-full z-50">
						<Navbar />
					</div>
					<div className="w-full">
						<Hero />
					</div>
				</div>
			</div>
			<About />
			<Experiences />
			<Unfiltered />
			{/* <Articles />s */}
			<Playlists />
			<CTA />
			<Footer />

			<div
				className="p-[20px] rounded-full w-[60px] h-[60px] bg-[#141B1F] flex justify-center fixed bottom-[5%] right-[5%] text-right z-40"
				onClick={scrollToTop}>
				<svg
					width="19"
					height="25"
					viewBox="0 0 19 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M17.1867 9.09333L9.09333 1L1 9.09333M9.09333 23.6667V1.22667"
						stroke="#fcfcfc"
						stroke-width="2"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<div className="flex flex-col navbar rounded-full p-[20px] fixed gap-y-[15px] bottom-[5%] left-[6%] text-right z-40">
				<div
					onClick={() => {
						window.location.href("https://github.com/theseyipeters");
					}}>
					<Github />
				</div>
				<div>
					<Behance />
				</div>
				<div>
					<Dribbble />
				</div>
			</div>
		</div>
	);
};

export default Landing;
