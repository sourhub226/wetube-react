import React from "react";
import SpinLoader from "./SpinLoader";
import VideoSnippet from "./VideoSnippet";

const SearchResult = ({ videos, loading }) => {
	return (
		<div className="search-result">
			{loading ? (
				<SpinLoader />
			) : (
				videos.map((video) => {
					return (
						<VideoSnippet
							key={video.id}
							title={video.snippet.title}
							dateAdded={video.snippet.publishedAt}
							channel={video.snippet.channelTitle}
							thumbnail={video.snippet.thumbnails.medium}
							description={video.snippet.description}
							id={video.id}
							duration={video.contentDetails.duration}
							views={video.statistics.viewCount}
						/>
					);
				})
			)}
		</div>
	);
};

export default SearchResult;
