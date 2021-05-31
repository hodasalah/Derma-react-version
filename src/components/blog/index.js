import React from "react";
import Box from "../Box";
import blog1 from "../../assets/images/blog-2.png";
import blog2 from "../../assets/images/blog-1.png";
import "./style.scss";
const Blog = () => {
	return (
		<section className="section_blog">
			<div className="wrapper">
				<h2 className="heading heading_big heading_blue">
					Clinical tools - at a glance
				</h2>
				<section className="blog_boxes">
					<Box
						withLink={true}
						sectionClass="box light_grey-bg"
						source={blog1}
						name="blog-1"
						info="box_info"
						head="heading heading_blue heading_small"
						headTitle="Dosing guide"
						link="Learn more about application and dosing"
					>
						Adtralza® has a straightforward dosing regimen, with 150
						mg prefilled syringes(1).
					</Box>
					<Box
						withLink={true}
						sectionClass="box light_grey-bg"
						source={blog2}
						name="blog-2"
						info="box_info"
						head="heading heading_blue heading_small"
						headTitle="Patient injection made simple"
						link="Watch the video"
					>
						This step by step video guide shows the patient how to
						self inject using the two syringes that come in the
						Adtralza® carton.
					</Box>
				</section>
			</div>
		</section>
	);
};

export default Blog;
