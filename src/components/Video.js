import { Link } from "@reach/router";
import React from "react";
import moment from "moment";

const Video = (props) => {
	return (
		<Link to={`watch/${props.id}`} className="video-container">
			<div className="video-image">
				<img src={props.thumbnail.url} alt="video thumbnail" />
			</div>
			<div className="video-info">
				<h3>{props.title}</h3>
				<h5>
					{moment(props.dateAdded).format("Do MMM YY")}
					{" · "}
					{moment(props.dateAdded).fromNow()}
				</h5>
				<h4>{props.channel}</h4>
				<p>{props.description}</p>
			</div>
		</Link>
	);
};

export default Video;
