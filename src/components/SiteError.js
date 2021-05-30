import React from "react";
import { REPO_NAME } from "../AppConstant";
import CountdownTimer from "./CountdownTimer";

const SiteError = (props) => {
	return (
		<div className="error-area">
			<div className="error-box">
				<div className="error-info">
					<h1>Error </h1>
					<h6>{props.errorText}</h6>
				</div>
				<div className="error-text">
					<h3>Possible reasons:</h3>

					<dd>
						<li>Incorrect url</li>
						<li>API error</li>
						<li>Internal site error</li>
					</dd>

					<h3>Possible solutions:</h3>

					<dd>
						<li>Check the url and video ID</li>
						<li>Reload the page</li>
						<li>Try again after sometime</li>
					</dd>
				</div>
				{props.redirect ? (
					<div className="error-redirect">
						You are being automatically redirected to the homepage
						in <CountdownTimer count={20} /> sec
					</div>
				) : null}

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
