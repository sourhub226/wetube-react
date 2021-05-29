//reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Link } from "@reach/router";
import { REPO_NAME } from "../AppConstant";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.error("ErrorBoundary caught an error", error, info);
	}

	render() {
		if (this.state.hasError) {
			return (
				<h1>
					There was an error while fetching the video.{" "}
					<Link to={`/${REPO_NAME}`}>Click here</Link> to go back to
					homepage.
				</h1>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
