import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { SEARCH_URL } from "../AppConstant";
import useDropdown from "./useDropdown";
import SiteError from "./SiteError";

const Search = () => {
	console.log("search.js loaded");
	const [keyword, setKeyword] = useState("funny dog videos");
	const [videos, setVideos] = useState([]);
	const [hasError, setError] = useState(false);
	const [errorCode, setErrorCode] = useState("");

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
				//add component to show error on site
				setError(true);
				setErrorCode(err.response.status);
				console.log("ERROR FOUND IN API");
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
					Search<br></br>
					<input
						type="text"
						placeholder="search"
						id="keyword"
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
					/>
				</label>
				<label htmlFor="advanced">
					<br></br>
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
			{hasError ? (
				<SiteError errorText={`Code: ${errorCode}`} redirect={false} />
			) : (
				<SearchResult videos={videos} />
			)}
		</div>
	);
};

export default Search;
