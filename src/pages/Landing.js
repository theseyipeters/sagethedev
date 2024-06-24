import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
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
import gsap, { snap } from "gsap";
import ScrollToTop from "../svgs/ScrollToTop";
import AnimatedLogo from "../svgs/AnimatedLogo";

const Landing = ({ isDarkMode }) => {
	const [showScrollToTop, setShowScrollToTop] = useState(false);
	const comp = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const t1 = gsap.timeline();

			t1.from("#intro-slider", {
				xPercent: "-100",
				duration: 1,
				delay: 0,
			})
				.from("#animate-logo", {
					yPercent: "1000",
					opacity: 0,
					duration: 1,
					// delay: 0.5,
				})
				.from("#animate-logo-span", {
					yPercent: "1000",
					opacity: 0,
					duration: 1,
					delay: 0.5,
				})
				.to("#animate-logo-span", {
					width: 800,
					delay: 2,
				})
				// .to("#animate-logo-span", {
				// 	width: 20,
				// 	delay: 2,
				// })
				.to(["#animate-logo", "#animate-logo-span"], {
					// yPercent: "1000",
					duration: 1,
					opacity: 0,
					delay: 2,
				})
				.to("#intro-slider", {
					xPercent: "100",
					duration: 1,
					delay: 0.3,
				});
		}, comp);

		return () => ctx.revert();
	}, []);

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
		<div
			className="relative"
			ref={comp}>
			<div
				id="intro-slider"
				className="h-screen fixed overflow-hidden w-full bg-radial top-0 left-0 z-50 flex gap-5 items-center justify-center">
				<span
					id="animate-logo-span"
					className="h-[20px] w-[20px] bg-radial2 rounded-full"></span>
				<AnimatedLogo />
			</div>
			<div
				id="homepage"
				className="bg-lightblue dark:bg-blue relative w-full h-fit max-h-fit overflow-hidden">
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

				{/* <Articles /> */}
				<Playlists />
				<CTA isDarkMode={isDarkMode} />
				<Footer isDarkMode={isDarkMode} />
				{showScrollToTop && (
					<div
						className={`p-[20px] rounded-full w-[60px] h-[60px] ${
							isDarkMode ? "navbar3 text-white" : "navbar4 text-blue"
						} flex justify-center fixed bottom-[5%] right-[5%] text-right z-40`}
						onClick={scrollToTop}>
						<ScrollToTop />
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
		</div>
	);
};

export default Landing;
