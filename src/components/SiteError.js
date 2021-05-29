import React from "react";
import { REPO_NAME } from "../AppConstant";

const SiteError = (props) => {
	return (
		<div className="error-area">
			<div className="error-box">
				<h1>Error Code: {props.errorCode}</h1>
				<h3>Possible reasons:</h3>
				<h4>Incorrect url</h4>
				<h4>API error</h4>

				<h3>Possible solutions:</h3>
				<h4>Check the video ID</h4>
				<h4>Reload the page</h4>
				<h5>
					<a href={`/${REPO_NAME}`}>Click here</a> to go back to
					homepage.
				</h5>
			</div>
		</div>
	);
};

export default SiteError;
