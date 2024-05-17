import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/projects/Projects";

function App() {
	return (
		<div className="w-full">
			<BrowserRouter>
				<div className="radial">
					<Routes>
						<Route
							path="/"
							element={<Landing />}
						/>
						<Route
							path="/projects"
							element={<Projects />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
