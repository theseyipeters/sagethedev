import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/projects/Projects";
import NavbarLanding from "./pages/components/NavbarLanding";
import NavbarProjects from "./pages/components/NavbarProjects";
import NavbarResume from "./pages/components/NavbarResume";
import Resume from "./pages/resume/Resume";
import About from "./pages/about/About";
import NavbarAbout from "./pages/components/NavbarAbout";
import NavbarContact from "./pages/components/NavbarContact";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "./ScrollToTop";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const darkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	useEffect(() => {
		const themeColorMeta = document.querySelector('meta[name="theme-color"]');
		if (isDarkMode) {
			themeColorMeta.setAttribute("content", "#000000"); // Dark mode color
			document.body.classList.add("dark-mode");
			document.body.classList.remove("light-mode");
		} else {
			themeColorMeta.setAttribute("content", "#ffffff"); // Light mode color
			document.body.classList.add("light-mode");
			document.body.classList.remove("dark-mode");
		}
	}, [isDarkMode]);

	return (
		<div className="w-full">
			<BrowserRouter>
				<ScrollToTop />
				<div className={`${isDarkMode ? "dark" : ""}`}>
					<div className="fixed top-0 w-full z-50">
						<Navbars
							isDarkMode={isDarkMode}
							setDarkMode={darkMode}
						/>
					</div>
					<Routes>
						<Route
							path="/"
							element={<Landing isDarkMode={isDarkMode} />}
						/>
						<Route
							path="/projects"
							element={<Projects isDarkMode={isDarkMode} />}
						/>
						<Route
							path="/resume"
							element={<Resume isDarkMode={isDarkMode} />}
						/>
						<Route
							path="/about"
							element={<About isDarkMode={isDarkMode} />}
						/>
						<Route
							path="/contact"
							element={<Contact isDarkMode={isDarkMode} />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

function Navbars({ isDarkMode, setDarkMode }) {
	const location = useLocation();

	switch (location.pathname) {
		case "/contact":
			return (
				<NavbarContact
					isDarkMode={isDarkMode}
					setDarkMode={setDarkMode}
				/>
			);
		case "/about":
			return (
				<NavbarAbout
					isDarkMode={isDarkMode}
					setDarkMode={setDarkMode}
				/>
			);
		case "/resume":
			return (
				<NavbarResume
					isDarkMode={isDarkMode}
					setDarkMode={setDarkMode}
				/>
			);
		case "/projects":
			return (
				<NavbarProjects
					isDarkMode={isDarkMode}
					setDarkMode={setDarkMode}
				/>
			);
		case "/":
		default:
			return (
				<NavbarLanding
					isDarkMode={isDarkMode}
					setDarkMode={setDarkMode}
				/>
			);
	}
}

export default App;
