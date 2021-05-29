import React from "react";
import { Router ,browserHistory } from "@reach/router";
import Search from "./components/Search";
import WatchArea from "./components/WatchArea";
import { REPO_NAME } from "./AppConstant";

const App = () => {
	// console.log("app.js loaded");
	// JSX format
	return (
		<div>
			<header>
				<a href={`/${REPO_NAME}`}>WeTube</a>
			</header>
			<div className="app-body">
				<Router histor={browserHistory}>
					<Search path={`${REPO_NAME}/`} />
					<WatchArea path={`/${REPO_NAME}/watch/:id`} />
				</Router>
			</div>
		</div>
	);
};

export default App;
