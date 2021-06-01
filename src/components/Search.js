import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { SEARCH_URL } from "../AppConstant";
import useDropdown from "./useDropdown";
import SiteError from "./SiteError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faSortAmountDownAlt,
	faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
	console.log("search.js loaded");
	const [keyword, setKeyword] = useState("funny dog videos");
	const [videos, setVideos] = useState([]);
	const [hasError, setError] = useState(false);
	const [errorCode, setErrorCode] = useState("404");
	const [loading, setLoading] = useState(false);
	const [order, OrderDropdown] = useDropdown(
		"Order By",
		"relevance",
		faSortAmountDownAlt,
		["date", "relevance", "rating", "title", "viewCount"]
	);

	const [safeSearch, SafeSearchDropdown] = useDropdown(
		"Safe Search",
		"none",
		faUserShield,
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
		setLoading(true);
		axios
			.get(`${SEARCH_URL}&q=${keyword}${advancedParams}`)
			.then((res) => {
				console.log(res);
				const { items } = res.data;
				setVideos(items);
				setLoading(false);
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
					<p>
						<FontAwesomeIcon icon={faSearch} className="fa-icon" />
						Search
					</p>
				</label>
				<input
					type="text"
					placeholder="search"
					id="keyword"
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
				/>
				<input
					type="checkbox"
					id="advanced-search-toggle"
					checked={checked}
					onChange={() => setChecked(!checked)}
				/>

				<label htmlFor="advanced-search-toggle">
					<div className="advanced-search-checkbox"></div>
					<p>Advanced Search</p>
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
				<SearchResult videos={videos} loading={loading} />
			)}
		</div>
	);
};

export default Search;
