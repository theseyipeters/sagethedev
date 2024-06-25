import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
// import resumePDF from "../../files/resume-dark.pdf";
import StgIcon from "../../svgs/StgIcon";
import ToggleSwitch from "../../svgs/ToggleSwitch";
import Home from "../../svgs/Home";
import MenuIcon from "../../svgs/MenuIcon";
import ToggleSwitch2 from "../../svgs/ToggleSwitch2";
import CloseIcon from "../../svgs/CloseIcon";

const NavbarContact = ({ setDarkMode, isDarkMode }) => {
	const [background, setBackground] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

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

	useEffect(() => {
		if (showMenu) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, [showMenu]);

	const navitems = [
		{ name: "About", hasDropdown: false, link: "/about" },
		{ name: "Résumé", hasDropdown: false, link: "/resume" },
	];

	const navbarClass = background ? (isDarkMode ? "navbar" : "navbar2") : "";

	const handleToggleMenu = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu);
	};
	return (
		<>
			<div className={`hidden lg:block sticky top-0 ${navbarClass}`}>
				<nav className="flex justify-between items-center py-[20px] px-[100px]">
					<Link
						className="text-blue dark:text-white hover:text-green-1 dark:hover:text-white transition duration-500 "
						to={"/"}>
						<StgIcon />
					</Link>

					<div className="flex items-center gap-x-[20px]">
						<ul className="text-blue dark:text-green-1 font-grotta font-normal flex gap-x-[25px] items-center">
							<Link
								to={"/"}
								className={`${isDarkMode ? "text-white" : "text-blue"}`}>
								<Home />
							</Link>
						</ul>

						<div className="ml-0">
							<ToggleSwitch setDarkMode={setDarkMode} />
						</div>
					</div>
				</nav>
			</div>

			<div className={`lg:hidden sticky top-0 ${navbarClass}`}>
				<nav className="flex z-20 justify-between items-center py-[10px] md:py-[20px] px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
					{!showMenu && (
						<Link
							className="text-blue dark:text-white hover:text-green-1 dark:hover:text-white transition duration-500"
							to={"/"}>
							<StgIcon />
						</Link>
					)}

					<div className="flex items-center">
						{!showMenu && (
							<div
								className="lg:hidden p-3 text-blue dark:text-white"
								onClick={handleToggleMenu}>
								<Link to={"/"}>
									<Home />
								</Link>
							</div>
						)}
						{!showMenu && (
							<div
								className={`${
									isDarkMode ? "text-white" : "text-blue"
								} ml-2 lg:hidden`}>
								<ToggleSwitch2 setDarkMode={setDarkMode} />
							</div>
						)}
					</div>
				</nav>
			</div>
		</>
	);
};

export default NavbarContact;
