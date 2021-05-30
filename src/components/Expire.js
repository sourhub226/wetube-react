import React, { useEffect, useState } from "react";
import SiteError from "./SiteError";

const Expire = (props) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setVisible(false);
		}, props.delay);
	}, [props.delay]);

	return visible ? <div>{props.children}</div> : <div><SiteError errorText="Unable to fetch video"></SiteError></div>;
};

export default Expire;
