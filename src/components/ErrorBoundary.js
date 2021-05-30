//reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Redirect } from "@reach/router";
import { REPO_NAME } from "../AppConstant";
import SiteError from "./SiteError";

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
			setTimeout(() => this.setState({ redirect: true }), 50000);
		}
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to={`/${REPO_NAME}`} noThrow />;
		}
		if (this.state.hasError) {
			return (
				<SiteError errorText="Internal error" redirect={true} />
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
