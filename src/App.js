import React from "react";
import Search from "./components/Search";
import { Router } from "@reach/router";
import WatchArea from "./components/WatchArea";

const App = () => {
	// JSX format
	return (
		<div>
			<header>
				<a href="/">WeTube</a>
			</header>
			<div className="app-body">
				<Router>
					<Search path="/" />
					<WatchArea path="/watch/:id" />
				</Router>
			</div>
		</div>
	);
};

export default App;
