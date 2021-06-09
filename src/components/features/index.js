import React from "react";
import Box from "../Box";
import icon1 from "../../assets/images/feat-icon-1.png";
import icon2 from "../../assets/images/feat-icon-2.png";
import icon3 from "../../assets/images/feat-icon-3.png";
import "./style.scss";

const Features = () => {
	return (
		<section className="section_feat">
			<div className="wrapper">
				<Box
					withLink={true}
					sectionClass="box"
					info="box_info"
					head="heading heading_blue heading_small"
					source={icon1}
					name="feature-1"
					headTitle="Long term sustained improvement"
					link="See efficacy and trial data"
				>
					9 out of 10 respondents experienced sustained disease
					control in clinical trials 10, providing sustained
					improvements in the burden of disease(1,2, 1, 8*†‡).
				</Box>

				<Box
					withLink={true}
					sectionClass="box"
					info="box_info"
					head="heading heading_blue heading_small"
					source={icon2}
					name="feature-2"
					headTitle="Improvements in the burden of disease"
					link="Learn more about quality of life improvements"
				>
					Patients in clinical trials saw an improvement in Quality of
					Life with early symptom relief and sustained improvements in
					burden of disease from week 16 to 32(12,13).
				</Box>

				<Box
					withLink={true}
					sectionClass="box"
					info="box_info"
					head="heading heading_blue heading_small"
					source={icon3}
					name="feature-3"
					headTitle="Good safety profile"
					link="See safety profile"
				>
					The overall frequency and severity of adverse events with
					Adtralza® were comparable to placebo at 16 weeks* and 52
					weeks(19).
				</Box>
			</div>
		</section>
	);
};

export default Features;
