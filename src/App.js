import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/projects/Projects";
import Navbar from "./pages/components/Navbar";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const darkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div className="w-full">
			<BrowserRouter>
				<div className={`${isDarkMode ? "dark" : ""}`}>
					<div className="fixed top-0 w-full z-50">
						<Navbar
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
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
