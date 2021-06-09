import React from "react";
import Video from "./video";
import "./style.scss";
import Button from "./Button";

const VideoSec = ({ show, openModal, closeModal }) => {
	return (
		<section className="section_video light_grey-bg">
			<div className="wrapper">
				<article className="info">
					<h2 className="heading heading_blue heading_big">
						Adtralza® neutralizes IL-13, a key driver of Atopic
						Dermatitis signs and symptoms.
					</h2>
					<p className="p">
						By specifically targeting the IL-13 cytokine, Adtralza®
						inhibits the interaction with type II receptors and
						prevents IL-13-induced inflammatory responses in the
						skin(1,2).
					</p>
					<p className="p">
						Adtralza® selectively modulates the dysregulated immune
						system by(1):
					</p>
					<ul className="p">
						<li>— Reducing markers of skin inflammation</li>
						<li>— Improving markers of skin barrier integrity</li>
						<li>— Reducing epidermal thickness</li>
					</ul>

					<Button value="Watch the video" />
					<p className="p">
						<small>Duration: 2:43</small>
					</p>
				</article>
				<Video
					open={show["video"]}
					closeModal={()=>closeModal("video")}
					click={() => openModal("video")}
				/>
			</div>
		</section>
	);
};

export default VideoSec;
