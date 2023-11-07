import "./country-card.css";
function CountryCard({ data, setShowDetails, setDetails }) {
	const { name, population, region, capital, flags } = data;

	return (
		<div
			onClick={() => {
				setDetails(data);
				setShowDetails(true);
			}}
			className="country-card"
		>
			<img src={flags.png} className="card-flag"></img>
			<div className="country-card-info">
				<h3>{name}</h3>
				<p>
					<strong>Population:</strong> {population.toLocaleString()}
				</p>
				<p>
					<strong>Region:</strong> {region}
				</p>
				<p>
					<strong>Capital:</strong> {capital ? capital : "None"}
				</p>
			</div>
		</div>
	);
}

export default CountryCard;
