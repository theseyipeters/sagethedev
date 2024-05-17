import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import resumePDF from "../../files/resume-dark.pdf";
import StgIcon from "../../svgs/StgIcon";

const Navbar = () => {
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
	return (
		<div className={`sticky top-0 ${background ? "navbar" : ""}`}>
			<nav className="flex justify-between items-center py-[25px] px-[100px]">
				<Link to={"/"}>
					<StgIcon />
				</Link>

				<div className="flex items-center gap-x-[20px]">
					<ul className="text-green font-grotta font-light flex gap-x-[25px]">
						<Link
							to={"/projects"}
							className="cursor-pointer hover:text-white transition duration-500">
							Projects
						</Link>
						<ScrollLink
							to="about"
							smooth={true}
							duration={500}
							className="cursor-pointer hover:text-white transition duration-500">
							About
						</ScrollLink>
						<ScrollLink
							to="experience"
							smooth={true}
							duration={500}
							className="cursor-pointer hover:text-white transition duration-500">
							Experience
						</ScrollLink>

						<div
							onClick={handleDownloadResume}
							className="cursor-pointer hover:text-white transition duration-500">
							Resumé
						</div>
					</ul>

					<button className="font-grotta text-blue rounded-full bg-green px-[30px] py-[8px]">
						Reach out
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
