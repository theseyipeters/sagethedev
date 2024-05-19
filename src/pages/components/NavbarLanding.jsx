import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import resumePDF from "../../files/resume-dark.pdf";
import StgIcon from "../../svgs/StgIcon";
import ToggleSwitch from "../../svgs/ToggleSwitch";
import MenuIcon from "../../svgs/MenuIcon";
import ToggleSwitch2 from "../../svgs/ToggleSwitch2";
import CloseIcon from "../../svgs/CloseIcon";

const NavbarLanding = ({ setDarkMode, isDarkMode }) => {
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
				<nav className="flex justify-between items-center py-[20px] px-[30px] md:px-[50px] lg:px-[100px] 2xl:px-[120px]">
					<Link
						className="text-blue dark:text-white hover:text-green-1 dark:hover:text-white transition duration-500 "
						to={"/"}>
						<StgIcon />
					</Link>

					<div className="flex items-center gap-x-[20px]">
						<ul className="text-blue dark:text-green-1 font-grotta font-normal flex gap-x-[25px]">
							{navitems.map((item, index) => (
								<Link
									key={index}
									to={item.link}
									// onClick={handleDownloadResume}
									className="cursor-pointer hover:text-green-1 dark:hover:text-white underline-thick transition duration-500">
									{item.name}
								</Link>
							))}
						</ul>

						<div className="ml-10">
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
								<div>
									<MenuIcon />
								</div>
							</div>
						)}
						{!showMenu && (
							<div className="ml-2 lg:hidden">
								<ToggleSwitch2 setDarkMode={setDarkMode} />
							</div>
						)}
					</div>

					{showMenu && (
						<div
							style={{ opacity: 0.95, transition: "opacity 1s ease" }}
							className="fixed flex md:items-center md:justify-center h-screen w-screen bg-white dark:bg-blue text-blue dark:text-white top-0 left-0 shadow-md p-[30px] z-40 overflow-y-auto">
							<ul className="w-full h-fit flex md:text-center text-left justify-start mt-20 flex-col font-normal p-4 gap-y-[30px] z-[1000] text-blue dark:text-green-1 font-grotta gap-x-[25px]">
								{navitems.map((item, index) => (
									<Link
										key={index}
										to={item.link}
										className="cursor-pointer hover:text-green-1 dark:hover:text-white transition duration-500">
										{item.name}
									</Link>
								))}
							</ul>

							<div
								onClick={handleToggleMenu}
								className="lg:hidden absolute top-5 right-10 text-2xl mt-4 font-semibold cursor-pointer">
								<CloseIcon />
							</div>
						</div>
					)}
				</nav>
			</div>
		</>
	);
};

export default NavbarLanding;
