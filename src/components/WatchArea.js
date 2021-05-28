import axios from "axios";
import React from "react";
import * as AppConstant from "../AppConstant";
import FormatNumber from "./FormatNumber";

class WatchArea extends React.Component {
	constructor() {
		super();
		this.state = { loading: true };
	}

	componentDidMount() {
		axios
			.get(`${AppConstant.VIDEO_URL}&id=${this.props.id}`)
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
				console.log(err);
			});
	}

	render() {
		if (this.state.loading) {
			return <h1 className="loader">Loading...</h1>;
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
				<h1>{title}</h1>
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

export default WatchArea;
