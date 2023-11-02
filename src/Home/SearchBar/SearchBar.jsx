import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./search-bar.css";

function SearchBar({ darkMode, search, setSearch }) {
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
			></input>
		</form>
	);
}

export default SearchBar;
