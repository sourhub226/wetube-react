import React from "react";
import { Router } from "@reach/router";
import Search from "./components/Search";
import WatchArea from "./components/WatchArea";
import { REPO_NAME } from "./AppConstant";

const App = () => {
	// console.log("app.js loaded");
	// JSX format
	return (
		<div className="app-body">
			<div className="logo">
				<a href={`/${REPO_NAME}`}>
					<span>We</span>Tube
				</a>
			</div>

			<Router>
				<Search path={`${REPO_NAME}/`} />
				<WatchArea path={`/${REPO_NAME}/watch/:id`} />
			</Router>
		</div>
	);
};

export default App;
