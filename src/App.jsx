import Header from "./Header/Header";
import Home from "./Home/Home";
import { useState } from "react";

function App() {
	if (!localStorage.getItem("darkmode")) {
		localStorage.setItem("darkmode", "true");
	}
	const [darkMode, setMode] = useState(
		localStorage.getItem("darkmode") == "true"
	);
	function setDarkMode() {
		setMode(!darkMode);
		localStorage.setItem(
			"darkmode",
			localStorage.getItem("darkmode") === "true" ? "false" : "true"
		);
	}

	const [showDetails, setShowDetails] = useState(false);
	const [details, setDetails] = useState("");
	return (
		<>
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />
			<Home
				darkMode={darkMode}
				details={details}
				setDetails={setDetails}
				showDetails={showDetails}
				setShowDetails={setShowDetails}
			/>
		</>
	);
}

export default App;
