import "./country-card.css";
function CountryCard({ data, setShowDetails, setDetails }) {
	const { name, population, region, capital, flags } = data;
	const flagStyles = {
		background: `url(${flags.svg})`,
		backgroundPosition: "center center",
		backgroundSize: "cover",
	};

	return (
		<div
			onClick={() => {
				setDetails(data);
				setShowDetails(true);
			}}
			className="country-card"
		>
			<div style={flagStyles} className="card-flag"></div>
			<div className="country-card-info">
				<h3>{name}</h3>
				<p>
					<strong>Population:</strong> {population.toLocaleString()}
				</p>
				<p>
					<strong>Region:</strong> {region}
				</p>
				<p>
					<strong>Capital:</strong> {capital}
				</p>
			</div>
		</div>
	);
}

export default CountryCard;
