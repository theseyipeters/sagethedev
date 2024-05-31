import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import Instagram from "../svgs/Instagram";
import Medium from "../svgs/Medium";
import { Tooltip } from "react-tooltip";

const Landing = ({ isDarkMode }) => {
	const [showScrollToTop, setShowScrollToTop] = useState(false);

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	const handleScroll = () => {
		if (window.scrollY > window.innerHeight / 2) {
			setShowScrollToTop(true);
		} else {
			setShowScrollToTop(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="bg-lightblue dark:bg-blue relative w-full h-fit max-h-fit overflow-hidden">
			<div className="bg-radial2 dark:bg-radial">
				<div
					className={`h-screen ${
						isDarkMode ? "hero" : "hero2"
					}  w-full flex items-center justify-center`}>
					{/* <div className="fixed top-0 w-full z-50">
						<Navbar />
					</div> */}
					<div className="w-full">
						<Hero isDarkMode={isDarkMode} />
					</div>
				</div>
			</div>
			<About />
			<Experiences isDarkMode={isDarkMode} />
			<Unfiltered isDarkMode={isDarkMode} />
			{/* <Articles />s */}
			<Playlists />
			<CTA isDarkMode={isDarkMode} />
			<Footer isDarkMode={isDarkMode} />

			{showScrollToTop && (
				<div
					className={`p-[20px] rounded-full w-[60px] h-[60px] ${
						isDarkMode ? "navbar3 text-white" : "navbar4 text-blue"
					} flex justify-center fixed bottom-[5%] right-[5%] text-right z-40`}
					onClick={scrollToTop}>
					<svg
						width="19"
						height="25"
						viewBox="0 0 19 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M17.1867 9.09333L9.09333 1L1 9.09333M9.09333 23.6667V1.22667"
							stroke="currentColor"
							strokeWidth="2"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			)}
			<div
				className={`flex w-fit flex-col ${
					isDarkMode ? "navbar3 text-white" : "navbar4 text-blue"
				} rounded-full p-[10px] md:p-[15px] lg:p-[15px] fixed gap-y-[15px] bottom-[5%] left-[6%] text-right z-40`}>
				<Link
					data-tooltip-id="github"
					className="w-[25px] md:w-[35px] lg:w-[35px]"
					to={"https://github.com/theseyipeters"}>
					<Github />
					<Tooltip
						id="github"
						place="right"
						effect="solid"
						backgroundColor="black"
						textColor="white"
						arrowColor="black">
						Github
					</Tooltip>
				</Link>
				<Link
					data-tooltip-id="instagram"
					to={"https://www.instagram.com/sage.the.dev/"}
					className="w-[25px] md:w-[35px] lg:w-[35px]">
					<Instagram />
					<Tooltip
						id="instagram"
						place="right"
						effect="solid"
						backgroundColor="black"
						textColor="white"
						arrowColor="black">
						Instagram
					</Tooltip>
				</Link>
				<Link
					to={"https://medium.com/@theseyipeters"}
					className="w-[25px] md:w-[35px] lg:w-[35px]">
					<div data-tooltip-id="medium">
						<Medium />
					</div>
					<Tooltip
						id="medium"
						place="right"
						effect="solid"
						backgroundColor="black"
						textColor="white"
						arrowColor="black">
						Medium
					</Tooltip>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
