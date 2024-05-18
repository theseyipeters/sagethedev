import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import resumePDF from "../../files/resume-dark.pdf";
import StgIcon from "../../svgs/StgIcon";
import ToggleSwitch from "../../svgs/ToggleSwitch";

const NavbarLanding = ({ setDarkMode, isDarkMode }) => {
	const [background, setBackground] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setBackground(true);
			} else {
				setBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleDownloadResume = () => {
		const blob = new Blob([resumePDF], { type: "application/pdf" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.setAttribute("download", "resume.pdf");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const navbarClass = background ? (isDarkMode ? "navbar" : "navbar2") : "";
	return (
		<div className={`sticky top-0 ${navbarClass}`}>
			<nav className="flex justify-between items-center py-[20px] px-[100px]">
				<Link
					className="text-blue dark:text-white"
					to={"/"}>
					<StgIcon />
				</Link>

				<div className="flex items-center gap-x-[20px]">
					<ul className="text-blue dark:text-green-1 font-grotta font-normal flex gap-x-[25px]">
						<Link
							to={"/projects"}
							className="cursor-pointer hover:text-green-1 dark:hover:text-white transition duration-500">
							Projects
						</Link>
						<ScrollLink
							to="about"
							smooth={true}
							duration={500}
							className="cursor-pointer hover:text-green-1 dark:hover:text-white transition duration-500">
							About
						</ScrollLink>
						<ScrollLink
							to="experience"
							smooth={true}
							duration={500}
							className="cursor-pointer hover:text-green-1 dark:hover:text-white transition duration-500">
							Experience
						</ScrollLink>

						<Link
							to={"/resume"}
							// onClick={handleDownloadResume}
							className="cursor-pointer hover:text-green-1 dark:hover:text-white transition duration-500">
							Resumé
						</Link>
					</ul>

					<div className="ml-10">
						<ToggleSwitch setDarkMode={setDarkMode} />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavbarLanding;
