import { Link } from "@reach/router";
import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDay,
	faPlayCircle,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const VideoSnippet = (props) => {
	return (
		<Link to={`watch/${props.id}`} className="video-snippet-container">
			<div className="video-snippet-image">
				<img src={props.thumbnail.url} alt="video thumbnail" />
			</div>
			<div className="video-snippet-info">
				<div className="video-snippet-title">
					<FontAwesomeIcon icon={faPlayCircle} className="fa-icon" />
					<h3
						dangerouslySetInnerHTML={{
							__html: `${props.title}`,
						}}
					></h3>
				</div>
				<div className="video-snippet-stats">
					<h5>
						<FontAwesomeIcon
							icon={faUserCircle}
							className="fa-icon"
						/>
						{props.channel}
					</h5>
					<h5>
						<FontAwesomeIcon
							icon={faCalendarDay}
							className="fa-icon"
						/>
						{moment(props.dateAdded).format("Do MMM YY")}
						{" · "}
						{moment(props.dateAdded).fromNow()}
					</h5>
				</div>
				<p>{props.description}</p>
			</div>
		</Link>
	);
};

export default VideoSnippet;
