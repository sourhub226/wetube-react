import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { SEARCH_URL, VIDEO_IDS_URL } from "../AppConstant";
import useDropdown from "./useDropdown";
import SiteError from "./SiteError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faSearch,
	faSortAmountDownAlt,
	faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
	// console.log("search.js loaded");
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

	const [videoDuration, VideoDurationDropdown] = useDropdown(
		"Video Duration",
		"any",
		faClock,
		["any", "long", "medium", "short"]
	);

	const [checked, setChecked] = useState(false);

	const [advancedParams, setAdvancedParams] = useState(``);

	useEffect(() => {
		if (!checked) {
			setAdvancedParams(
				`&order=${order}&safeSearch=${safeSearch}&videoDuration=${videoDuration}`
			);
		} else {
			setAdvancedParams("");
		}
	}, [checked, order, safeSearch, videoDuration]);

	const requestSearch = () => {
		// console.log("submited");
		setLoading(true);
		axios
			.get(`${SEARCH_URL}&q=${keyword}${advancedParams}`)
			.then((res1) => {
				// console.log(res);
				const { items } = res1.data;
				// console.log(items);
				axios
					.get(
						`${VIDEO_IDS_URL}&id=${items
							.map((item) => {
								return item.id.videoId;
							})
							.toString()}`
					)
					.then((res2) => {
						// console.log(res2.data);
						const results = items.map((item, i) => {
							if (item.id.videoId === res2.data.items[i].id) {
								//merging two objects
								return Object.assign(
									{},
									item,
									res2.data.items[i]
								);
							}
						});

						// console.log(results);
						setVideos(results);
						setLoading(false);
					});
			})
			.catch((err) => {
				console.log(err);
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
						<VideoDurationDropdown />
					</div>
				) : null}

				<button onClick={() => setChecked(false)}>Submit</button>
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
