import React from "react";
import { Redirect, Router } from "@reach/router";
import Search from "./components/Search";
import WatchArea from "./components/WatchArea";
import { REPO_NAME } from "./AppConstant";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
	// console.log("app.js loaded");
	// JSX format
	return (
		<div>
			<DarkModeToggle />

			<div className="app-body">
				<div className="logo">
					<a href={`/${REPO_NAME}`}>
						<span>We</span>Tube
					</a>
				</div>

				<Router>
					<Search path={`${REPO_NAME}/`} />
					<WatchArea path={`/${REPO_NAME}/watch/:id`} />
					<Redirect from="*" to={`/${REPO_NAME}`} />
				</Router>
			</div>
		</div>
	);
};

export default App;
