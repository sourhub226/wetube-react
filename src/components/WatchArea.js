import axios from "axios";
import React from "react";
import { VIDEO_URL } from "../AppConstant";
import ErrorBoundary from "./ErrorBoundary";
import Expire from "./Expire";
import FormatNumber from "./FormatNumber";
import SiteError from "./SiteError";
import SpinLoader from "./SpinLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEye,
	faPenAlt,
	faPlayCircle,
	faThumbsDown,
	faThumbsUp,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

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
				<Expire delay="15000">
					<SpinLoader />
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
				<h3 className="title">
					<FontAwesomeIcon icon={faPlayCircle} className="fa-icon" />
					{title}
				</h3>
				<div className="video-stats">
					<h4 className="channel-name">
						<FontAwesomeIcon
							icon={faUserCircle}
							className="fa-icon"
						/>
						{channel}
					</h4>
					<div>
						<h5>
							<FontAwesomeIcon icon={faEye} className="fa-icon" />
							<FormatNumber number={views} /> Views
						</h5>
						<h5>
							<FontAwesomeIcon
								icon={faThumbsUp}
								className="fa-icon"
							/>
							<FormatNumber number={likes} /> Likes
						</h5>
						<h5>
							<FontAwesomeIcon
								icon={faThumbsDown}
								className="fa-icon"
							/>
							<FormatNumber number={dislikes} /> Dislikes
						</h5>
					</div>
				</div>
				<div className="description">
					<span>
						<FontAwesomeIcon icon={faPenAlt} className="fa-icon" />
						Description<br></br>
					</span>
					<p
						dangerouslySetInnerHTML={{
							__html: `${description.replace(
								/(https?:\/\/[^\s]+)/g,
								"<a href='$1'>$1</a>"
							)}`,
						}}
					></p>
				</div>
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
