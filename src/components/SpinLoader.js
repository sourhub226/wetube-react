import React from "react";

const SpinLoader = () => {
	return (
		<div className="loader">
			<div className="dots">
				<div style={{ "--d": 0 }}></div>
				<div style={{ "--d": 1 }}></div>
				<div style={{ "--d": 2 }}></div>
				<div style={{ "--d": 3 }}></div>
				<div style={{ "--d": 4 }}></div>
			</div>
		</div>
	);
};

export default SpinLoader;
