import React from "react";
import { Router } from "@reach/router";
import Search from "./components/Search";
import WatchArea from "./components/WatchArea";
import * as AppConstant from "./AppConstant";

const App = () => {
	console.log("app.js loaded");
	// JSX format
	return (
		<div>
			<header>
				<a href={`/${AppConstant.REPO_NAME}`}>WeTube</a>
			</header>
			<div className="app-body">
				<Router>
					<Search path={`${AppConstant.REPO_NAME}/`} />
					<WatchArea path={`/${AppConstant.REPO_NAME}/watch/:id`} />
				</Router>
			</div>
		</div>
	);
};

export default App;
