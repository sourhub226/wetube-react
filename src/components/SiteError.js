import React from "react";
import { REPO_NAME } from "../AppConstant";

const SiteError = (props) => {
	return (
		<div className="error-area">
			<div className="error-box">
				<h1>Error Code: {props.errorCode}</h1>
				<div className="error-text">
					<h3>Possible reasons:</h3>

					<dd>
						<li>Incorrect url</li>
						<li>API error</li>
					</dd>

					<h3>Possible solutions:</h3>

					<dd>
						<li>Check the url and video ID</li>
						<li>Reload the page</li>
						<li>Try again after sometime</li>
					</dd>
				</div>

				{/* <h3>Possible reasons:</h3>
				<h4>Incorrect url</h4>
				<h4>API error</h4>

				<h3>Possible solutions:</h3>
				<h4>Check the video ID</h4>
				<h4>Reload the page</h4> */}
				<h4>
					<a href={`/${REPO_NAME}`}>
						Click here to go back to homepage
					</a>
				</h4>
			</div>
		</div>
	);
};

export default SiteError;
