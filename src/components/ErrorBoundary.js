//reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Redirect } from "@reach/router";
import { REPO_NAME } from "../AppConstant";
import CountdownTimer from "./CountdownTimer";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, redirect: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.error("ErrorBoundary caught an error", error, info);
	}

	componentDidUpdate() {
		if (this.state.hasError) {
			setTimeout(() => this.setState({ redirect: true }), 10000);
		}
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={`/${REPO_NAME}`} noThrow />;
		}
		if (this.state.hasError) {
			return (
				<h1>
					There was an error while fetching the video.<br></br>You are
					being redirected to the homepage in{" "}
					<CountdownTimer count={10} /> sec.<br></br>
					<a href={`/${REPO_NAME}`}>Click here</a> to go back to
					homepage immediately.
				</h1>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
