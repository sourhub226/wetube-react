import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { SEARCH_URL } from "../AppConstant";
import useDropdown from "./useDropdown";

const Search = () => {
	// console.log("search.js loaded");
	const [keyword, setKeyword] = useState("funny dog videos");
	const [videos, setVideos] = useState([]);

	const [order, OrderDropdown] = useDropdown("Order By", "relevance", [
		"date",
		"relevance",
		"rating",
		"title",
		"viewCount",
	]);

	const [safeSearch, SafeSearchDropdown] = useDropdown(
		"Safe Search",
		"none",
		["moderate", "none", "strict"]
	);

	const [checked, setChecked] = useState(false);

	const [advancedParams, setAdvancedParams] = useState(``);

	useEffect(() => {
		if (checked) {
			setAdvancedParams(`&order=${order}&safeSearch=${safeSearch}`);
		} else {
			setAdvancedParams("");
		}
	}, [checked, order, safeSearch]);

	const requestSearch = () => {
		// console.log("submited");
		axios
			.get(`${SEARCH_URL}&q=${keyword}${advancedParams}`)
			.then((res) => {
				console.log(res);
				const { items } = res.data;
				setVideos(items);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="search-area">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					requestSearch();
				}}
			>
				<label htmlFor="keyword">
					Search
					<input
						type="text"
						id="keyword"
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
					/>
				</label>
				<label htmlFor="advanced">
					<input
						type="checkbox"
						id="advanced"
						checked={checked}
						onChange={() => setChecked(!checked)}
					></input>
					Advanced Search<br></br>
				</label>

				{checked ? (
					<div>
						<OrderDropdown />
						<SafeSearchDropdown />
					</div>
				) : null}

				<button>Submit</button>
			</form>
			<SearchResult videos={videos} />
		</div>
	);
};

export default Search;
