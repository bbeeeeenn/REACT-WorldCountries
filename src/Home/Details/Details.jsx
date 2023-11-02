import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import "./details.css";

function Button({ setShowDetails }) {
	return (
		<button
			onClick={() => {
				setShowDetails(false);
			}}
			className="details-back_btn"
		>
			<FontAwesomeIcon
				icon={faArrowLeftLong}
				style={{ marginRight: "10px" }}
			/>
			Back
		</button>
	);
}

function Border({ country, countriesData, setDetails }) {
	const foundCountry = countriesData.filter((c) => {
		return c.alpha3Code == country;
	});
	const firstWord = foundCountry[0].name.split("(");
	return (
		<div
			className="border"
			onClick={() => {
				setDetails(foundCountry[0]);
			}}
		>
			{firstWord[0]}
		</div>
	);
}

function Details({ countries, data, setDetails, setShowDetails }) {
	console.log(data);

	return (
		<div className="details-container">
			<Button setShowDetails={setShowDetails} />
			<div className="details">
				<img className="details-flag" src={data.flags.svg} />
				<div>
					<h2>{data.name}</h2>
					<div className="more-details-container">
						<div className="more-details-1">
							<p>
								<strong>Native Name: </strong>
								{data.nativeName && data.nativeName}
							</p>
							<p>
								<strong>Population: </strong>
								{data.population && data.population.toLocaleString()}
							</p>
							<p>
								<strong>Region: </strong>
								{data.region && data.region}
							</p>
							<p>
								<strong>Sub Region: </strong>
								{data.subregion && data.subregion}
							</p>
							<p>
								<strong>Capital: </strong>
								{data.capital && data.capital}
							</p>
						</div>
						<div className="more-details-2">
							<p>
								<strong>Top Level Domain: </strong>
								{data.topLevelDomain && data.topLevelDomain}
							</p>
							<p>
								<strong>Currencies: </strong>
								{data.currencies.map((cur) => cur.name).join(", ")}
							</p>
							<p>
								<strong>Languages: </strong>
								{data.languages.map((lang) => lang.name).join(", ")}
							</p>
						</div>
					</div>
					<div>
						<div className="border-countries">
							<strong>Border Countries: </strong>
							{data.borders
								? data.borders.map((border) => {
										return (
											<Border
												key={border}
												country={border}
												countriesData={countries}
												setDetails={setDetails}
											/>
										);
								  })
								: "None"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Details;
