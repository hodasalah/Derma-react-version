import React from "react";
import video from "../../assets/images/nature.mp4";
import videoPoster from "../../assets/images/video-bg.png";
import Modal from "../UI/modal";
const Video = ({ open, click, closeModal }) => {
	return (
		<article className="video-box">
			{open ? (
				<Modal show={open} closed={closeModal}>
					<video src={video} poster={videoPoster} muted controls>
						Your browser does not support the video tag.
					</video>
				</Modal>
			) : (
				<video
					onClick={click}
					src={video}
					poster={videoPoster}
					muted
					controls
				>
					Your browser does not support the video tag.
				</video>
			)}
		</article>
	);
};
export default Video;
