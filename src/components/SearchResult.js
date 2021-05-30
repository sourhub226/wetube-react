import React from "react";
import SpinLoader from "./SpinLoader";
import Video from "./Video";

const SearchResult = ({ videos,loading }) => {
	return (
		<div className="search-result">
			{loading ? (
				<SpinLoader/>
			) : (
				videos.map((video) => {
					return (
						<Video
							key={video.id.videoId}
							title={video.snippet.title}
							dateAdded={video.snippet.publishedAt}
							channel={video.snippet.channelTitle}
							thumbnail={video.snippet.thumbnails.medium}
							description={video.snippet.description}
							id={video.id.videoId}
						/>
					);
				})
			)}
		</div>
	);
};

export default SearchResult;
