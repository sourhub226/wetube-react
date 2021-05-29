import React, { useState, useEffect } from "react";
const CountdownTimer = (props) => {
	const [counter, setCounter] = useState(props.count);
	useEffect(() => {
		counter >= 1 && setTimeout(() => setCounter(counter - 1), 1000);
	}, [counter]);

	return <span>{counter}</span>;
};

export default CountdownTimer;
