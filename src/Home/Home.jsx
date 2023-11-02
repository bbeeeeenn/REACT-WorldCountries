import SearchBar from "./SearchBar/SearchBar";
import Filter from "./Filter/Filter";
import CountryCard from "./Cards/CountryCard";
import Details from "./Details/Details";
import "./home.css";
import data from "../data.json";
import { useState } from "react";

function Home({ darkMode, showDetails, setShowDetails, setDetails, details }) {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");
	const searchResult = data.filter((country) =>
		country.name.toLowerCase().includes(search.toLowerCase())
	);
	const filteredResult = searchResult.filter((result) => {
		return result.region.includes(filter);
	});
	return (
		<div className="home">
			<div className="search-container">
				<SearchBar
					darkMode={darkMode}
					search={search}
					setSearch={setSearch}
				/>
				<Filter filter={filter} setFilter={setFilter} />
			</div>
			<section className="body">
				{filteredResult.map((country) => {
					return (
						<CountryCard
							key={country.name}
							setShowDetails={setShowDetails}
							setDetails={setDetails}
							data={country}
						/>
					);
				})}
			</section>
			{showDetails && (
				<Details
					countries={data}
					data={details}
					setDetails={setDetails}
					setShowDetails={setShowDetails}
				/>
			)}
		</div>
	);
}

export default Home;
