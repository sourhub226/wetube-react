//custom hook

import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
	const [state, setState] = useState(defaultState);
	const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

	const Dropdown = () => {
		return (
			
			<label htmlFor="{id}">
				{label}
				<br></br>
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
				<br></br>
			</label>
		);
	};
	return [state, Dropdown, setState];
};

export default useDropdown;
