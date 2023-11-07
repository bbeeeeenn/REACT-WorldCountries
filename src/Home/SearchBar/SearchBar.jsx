import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark as regularXmark } from "@fortawesome/free-regular-svg-icons";
import "./search-bar.css";

function SearchBar({ darkMode, search, setSearch }) {
	function clear() {
		setSearch("");
	}

	return (
		<form
			className="search-bar"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<button className="search-btn" type="submit">
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					style={{
						color: `${darkMode ? "white" : "hsl(0, 0%, 52%)"}`,
						fontSize: "1.1rem",
					}}
				/>
			</button>
			<input
				onChange={(e) => {
					setSearch(e.target.value);
				}}
				value={search}
				type="text"
				placeholder="Search for a country..."
				maxlength="20"
			></input>
			{search.length > 0 && (
				<div onClick={clear} className="clear-btn">
					{darkMode ? (
						<FontAwesomeIcon style={{}} icon={faCircleXmark} />
					) : (
						<FontAwesomeIcon icon={regularXmark} />
					)}
				</div>
			)}
		</form>
	);
}

export default SearchBar;
