import React from "react";
import Box from "../Box";
import videBg from "../../assets/images/video.png";
import "./style.scss";

const Videos = (props) => {
	const num = [...Array(6)];
	return (
		<section className="section_videos light_grey-bg">
			<div className="wrapper">
				<article className="section_videos--heading">
					<h2 className="heading heading_blue heading_big">
						KOL Videos - get expert insights here
					</h2>
					<p className="p">
						See what Key opinion leaders have to say about their
						experiences with Adtralza®
					</p>
				</article>
				<section className="videos-boxes">
					{num.map((_, i) => (
						<Box
							key={Math.random()}
							sectionClass="box"
							source={videBg}
							name="video"
							info="box_info"
							head="video_title"
							withLink={false}
							headTitle="Video Title"
							show={props.show[i]}
							close={() => props.closeModal(i)}
							openModal={() => props.openModal(i)}
						>
							Short description of the contents or subject of the
							video. You can upload a screen from the video as
							thumbnail image
						</Box>
					))}
				</section>
			</div>
		</section>
	);
};

export default Videos;
