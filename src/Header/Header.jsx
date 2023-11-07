import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";
import "./header.css";

const colors = [
	{
		property: "--element-color",
		value: { dark: "hsl(209, 23%, 22%)", light: "hsl(0, 0%, 100%)" },
	},
	{
		property: "--background-clr",
		value: { dark: "hsl(207, 26%, 17%)", light: "hsl(0, 0%, 98%)" },
	},
	{
		property: "--text-clr",
		value: { dark: "hsl(0, 0%, 100%)", light: "hsl(200, 15%, 8%)" },
	},
	{
		property: "--faded-text-clr",
		value: { dark: "hsl(0, 0%, 85%)", light: "hsl(0, 0%, 20%)" },
	},
	{
		property: "--input-clr",
		value: { dark: "hsl(209, 23%, 22%)", light: "hsl(0, 0%, 52%)" },
	},
];

function Header({ darkMode, setDarkMode }) {
	function handleClick() {
		setDarkMode();
	}
	if (darkMode) {
		colors.forEach(({ property, value }) => {
			document.body.style.setProperty(property, value.dark);
		});
	} else if (!darkMode) {
		colors.forEach(({ property, value }) => {
			document.body.style.setProperty(property, value.light);
		});
	}

	return (
		<header>
			<h1>Where in the world?</h1>
			<div onClick={handleClick} className="dark-mode">
				{darkMode ? (
					<MoonIcon icon={faMoon} />
				) : (
					<MoonIcon icon={faMoonRegular} />
				)}
				Dark Mode
			</div>
		</header>
	);
}

function MoonIcon({ icon }) {
	return (
		<FontAwesomeIcon
			icon={icon}
			style={{
				marginRight: "7px",
			}}
		/>
	);
}

export default Header;
