//custom hook

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useDropdown = (label, defaultState, icon, options) => {
	const [state, setState] = useState(defaultState);
	const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

	const Dropdown = () => {
		return (
			<div>
				<label htmlFor="{id}">
					<p>
						<FontAwesomeIcon icon={icon} className="fa-icon" />
						{label}
					</p>
				</label>
				<select
					id={id}
					value={state}
					onChange={(e) => setState(e.target.value)}
					onBlur={(e) => setState(e.target.value)}
				>
					{options.map((item) => {
						return (
							<option value={item} key={item}>
								{item}
							</option>
						);
					})}
				</select>
			</div>
		);
	};
	return [state, Dropdown, setState];
};

export default useDropdown;
