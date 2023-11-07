import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./filter.css";
import { useState } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania", "Polar"];
function Filter({ filter, setFilter }) {
	const [showChoices, setShowChoices] = useState("hidden");
	function handleClick() {
		setShowChoices(showChoices == "hidden" ? "visible" : "hidden");
	}
	return (
		<div className="region-filter-container">
			<div
				onClick={() => {
					handleClick();
					setFilter("");
				}}
				className="region-filter"
			>
				<p>{filter != "" ? filter : "Filter by Region"}</p>
				<div className="icon">
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
			</div>
			<div style={{ visibility: showChoices }} className="filter-choices">
				{regions.map((region) => {
					return (
						<div
							onClick={() => {
								setFilter(region);
								handleClick();
							}}
							key={region}
						>
							{region}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Filter;
