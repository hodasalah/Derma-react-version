import React from "react";
import video from "../../assets/images/nature.mp4";
import videoPoster from "../../assets/images/video-bg.png";

const Video = () => {
	return (
		<article className="video-box">
			<video src={video} poster={videoPoster} muted controls>
				Your browser does not support the video tag.
			</video>
		</article>
	);
};
export default Video;
