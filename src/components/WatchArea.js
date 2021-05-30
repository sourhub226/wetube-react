import axios from "axios";
import React from "react";
import { VIDEO_URL } from "../AppConstant";
import ErrorBoundary from "./ErrorBoundary";
import Expire from "./Expire";
import FormatNumber from "./FormatNumber";
import SiteError from "./SiteError";

class WatchArea extends React.Component {
	constructor() {
		super();
		this.state = { loading: true, hasError: false, errorCode: "" };
	}

	componentDidMount() {
		// throw new Error();
		axios
			.get(`${VIDEO_URL}&id=${this.props.id}`)
			.then((res) => {
				console.log(res);
				const item = res.data.items[0];
				this.setState({
					title: item.snippet.title,
					views: item.statistics.viewCount,
					description: item.snippet.description,
					channel: item.snippet.channelTitle,
					likes: item.statistics.likeCount,
					dislikes: item.statistics.dislikeCount,
					id: item.id,
					loading: false,
				});
			})
			.catch((err) => {
				console.log(err.response.status);

				this.setState({
					hasError: true,
					errorCode: err.response.status,
				});
				console.log("ERROR FOUND IN API");
			});
	}

	render() {
		if (this.state.hasError) {
			return (
				<SiteError
					errorText={`Code: ${this.state.errorCode}`}
					redirect={false}
				/>
			);
		} else if (this.state.loading) {
			return (
				<Expire delay="10000">
					<h1 className="loader">Loading...</h1>
				</Expire>
			);
		}
		const { title, views, description, channel, likes, dislikes, id } =
			this.state;
		return (
			<div className="watch-area">
				<div className="player">
					<iframe
						src={`//www.youtube.com/embed/${id}?autoplay=0`}
						frameBorder="0"
						title={title}
						allow="autoplay; encrypted-media"
						allowFullScreen
					></iframe>
				</div>
				<h2>{title}</h2>
				<div className="video-stats">
					<div>
						<FormatNumber number={views} /> Views
					</div>
					<div>
						<FormatNumber number={likes} /> Likes
					</div>
					<div>
						<FormatNumber number={dislikes} /> Dislikes
					</div>
				</div>
				<div className="channel-name">{channel}</div>
				<p>{description}</p>
			</div>
		);
	}
}

export default function WatchAreaWithErrorBoundary(props) {
	return (
		<ErrorBoundary>
			<WatchArea {...props} />
		</ErrorBoundary>
	);
}
