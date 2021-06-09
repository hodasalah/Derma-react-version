import React from "react";
import Img from "./img";
import Modal from "./UI/modal";

const BlogBox = (props) => {
	return (
		<article className={props.sectionClass}>
			{props.show ? (
				<Modal show={props.show} closed={props.close}>
					<Img source={props.source} name={props.name} />
				</Modal>
			) : (
				<Img
					source={props.source}
					name={props.name}
					clickImg={props.openModal}
				/>
			)}

			<article className={props.info}>
				<h3 className={props.head}>{props.headTitle}</h3>
				<p className="p">{props.children}</p>
				{props.withLink ? (
					<a href="/#" className="link">
						{props.link}
					</a>
				) : null}
			</article>
		</article>
	);
};

export default BlogBox;
